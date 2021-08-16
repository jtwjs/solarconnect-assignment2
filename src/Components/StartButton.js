import React from 'react';
import styled from 'styled-components/macro';

export default function StartButton({className, clickHandler}) {
	return (
		<Wrapper
			type="button"
			className={className}
			onClick={clickHandler}
		>
			Sorting
		</Wrapper>
	);
};

const Wrapper = styled.button`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	height: 55px;
  border-radius: 4px;
  padding: 0 20px;
	font-size: 18px;
  font-weight: 700;
	line-height: 1.5;
	color: ${({theme}) => theme.color.white};
	background-color: ${({theme}) => theme.color.blueGrey};
	transition: background-color .2s ease-in-out;
	
	&:hover {
    background-color: ${({theme}) => theme.color.blueGreyDark};
	}
`

