import React, {useCallback, useEffect, useRef} from 'react';
import {createPortal} from "react-dom";
import styled from 'styled-components/macro';

import Button from "Components/Button";

export default function Alert({isOpen, text, closeHandler}) {
	const modalRef = useRef(null);
	const handleKeyTrap = useCallback(e => {
		if (!modalRef.current) {
			return;
		}

		const focusableNodeList = modalRef.current.querySelectorAll(
			"[href], [tabindex], button, input, textarea, select"
		);

		const shiftKey = e.shiftKey;

		const eventTarget = e.target;

		const firstFocusableNode = focusableNodeList[0];
		const lastFocusableNode = focusableNodeList[focusableNodeList.length - 1];

		const isFirstFocusableNode = Object.is(eventTarget, firstFocusableNode);
		const isLastFocusableNode = Object.is(eventTarget, lastFocusableNode);

		if (shiftKey && isFirstFocusableNode) {
			e.preventDefault();
			lastFocusableNode.focus();
		}

		if (!shiftKey && isLastFocusableNode) {
			e.preventDefault();
			firstFocusableNode.focus();
		}
	},[]);


	useEffect(() => {

		const keyListenerMap = new Map([
			[ 27, closeHandler ],
			[ 9, handleKeyTrap ],
		]);

		function handleKeyListener(e) {
			const listener = keyListenerMap.get(e.keyCode);
			typeof listener === "function" && listener(e);
		}
		window.addEventListener("keydown", handleKeyListener);

		return () => {
			window.removeEventListener("keydown", handleKeyListener);
		}
	}, [closeHandler, handleKeyTrap]);
	return (
		<>
			{isOpen &&
			createPortal(
				<Wrapper>
					<StyledModal
						ref={modalRef}
						tabIndex="-1"
						role="dialog"
						aria-modal="true"
					>
						<h2 className="a11y">Alert Dialog</h2>
						<StyledContent>{text}</StyledContent>
						<Button clickHandler={closeHandler}>Confirm</Button>
					</StyledModal>
				</Wrapper>,
				document.body
			)
			}
		</>
	);
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10000;

  &[hidden] {
    display: none;
  }
`;
const StyledModal = styled.div`
  position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 350px;
	width: 100%;
	border-radius: 4px;
	padding: 30px 0;
  background-color: ${({theme}) => theme.color.white};
`;
const StyledContent = styled.p`
	display: block;
	margin-bottom: 20px;
	font-size: 20px;
	color: ${({theme}) => theme.color.blueGrey};
	text-align: center;
`;
const StyledConfirmBtn = styled(Button)`
`;