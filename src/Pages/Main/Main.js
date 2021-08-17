import React, {useState, useCallback, useRef} from "react";
import styled, {ThemeProvider, css} from 'styled-components/macro';

import {theme} from 'Styles/Theme';
import Timer from "Components/Timer";
import FormField from "Components/FormField";
import DescField from "Components/DescField";
import Alert from "Components/Alert";

export default function Main() {
	const [inputText, setInputText] = useState('');
	const [unsortedNums, setUnsortedNums] = useState(null);
	const [isOpenAlert, setIsOpenAlert] = useState(false);

	const inputRef = useRef(null);

	const handleInputWithNumericOnly = useCallback(e => {
		const value = e.target.value;
		const regex = /^([0-9]+[/,]{0,1})*$/;
		regex.test(value) && setInputText(value);
	}, []);

	const handleInputBlur = useCallback(e => {
		const value = e.target.value;
		const lastChar = value.charAt(value.length - 1);
		const regex = /[0-9]/;
		!regex.test(lastChar) && setInputText(value.slice(0, -1));
	},[]);

	const handleSortingButton = useCallback(() => {
		if (!inputText) {
			setIsOpenAlert(true);
			return;
		}
		const nums = inputText.split(',')
			.map(num => parseInt(num))
			.filter(num => !isNaN(num));
		setUnsortedNums(nums);
		setInputText('');
	}, [inputText]);

	const handleCloseAlert = useCallback(() => {
		setIsOpenAlert(false);
		inputRef.current.focus();
	}, []);

	return (
	 	<ThemeProvider theme={theme}>
			<StyledMain>
				<StyledTitle>Sorting Machine</StyledTitle>
				<StyledSection>
					<h2 className="a11y">Sorting Machine Container</h2>
					<Timer kind="KOREA"/>
					<FormField
						ref={inputRef}
						value={inputText}
						handleSortingButton={handleSortingButton}
						handleInputBlur={handleInputBlur}
						onChange={handleInputWithNumericOnly}
						placeholder="ex: 1,2,3,4"
					/>
					<DescField nums={unsortedNums} />
					<Timer kind="USA"/>
				</StyledSection>
			</StyledMain>
		  <Alert
			  isOpen={isOpenAlert}
			  text="😅 값을 입력해주세요."
			  closeHandler={handleCloseAlert}
		  />
		</ThemeProvider>
	);
}

const StyledMain = styled.main`
  width: 100%;
  padding-bottom: 60px;
  background-color: ${({theme}) => theme.color.background};

  @media screen and ${({theme}) => theme.device.tablet} {
    padding: 0 ${({theme}) => theme.layout.md_margin} ${({theme}) => theme.layout.md_margin};
  }

  @media screen and ${({theme}) => theme.device.mobile} {
    padding: 0 ${({theme}) => theme.layout.sm_margin} ${({theme}) => theme.layout.sm_margin};
  }
`;

const responsiveMixin = css`
  @media screen and ${({theme}) => theme.device.tablet} {
    max-width: ${({theme}) => theme.layout.md_max_container};

  }

  @media screen and ${({theme}) => theme.device.mobile} {
    max-width: unset;
    width: 100%;
  }
`

const StyledTitle = styled.h1`
  max-width: ${({theme}) => theme.layout.lg_max_container};
  margin: 0 auto;
  font-size: 30px;
  font-weight: 700;
  line-height: 2;
  color: ${({theme}) => theme.color.blueGrey};

  ${responsiveMixin}
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({theme}) => theme.layout.lg_max_container};
  margin: 0 auto;
  padding: 30px 0;
  border-radius: 20px;
  background-color: ${({theme}) => theme.color.white};

  ${responsiveMixin}
`;

