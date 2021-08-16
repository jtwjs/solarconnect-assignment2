import React, { useState, useCallback } from "react";
import styled, { ThemeProvider, css } from 'styled-components/macro';

import {theme} from 'Styles/Theme';
import Timer from "Components/Timer";
import InputField from "Components/InputField";
import StartButton from "Components/StartButton";

export default function Main() {
	const [inputText, setInputText] = useState('');

	const handleInputWithNumericOnly = useCallback(e => {
		const value = e.target.value;
		const regex = /^([0-9]+[/,]{0,1})*$/;
		regex.test(value) && setInputText(value);
	}, []);

	const handleStartButton = useCallback(() => {
		console.log('click');
	},[]);

	return (
		<ThemeProvider theme={theme}>
			<StyledMain>
				<StyledTitle>Sorting Machine</StyledTitle>
				<StyledSection>
					<Timer kind="KOREA"/>
					<InputField
						inputText={inputText}
						handleInputText={handleInputWithNumericOnly}
					/>
					<StyledStartButton clickHandler={handleStartButton} />
					<Timer kind="USA"/>
				</StyledSection>
			</StyledMain>
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
  @media screen and ${({ theme }) => theme.device.tablet} {
    max-width: ${({theme}) => theme.layout.md_max_container};
    
  }

  @media screen and ${({ theme }) => theme.device.mobile} {
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
	height: 100vh;
	margin: 0 auto;
	padding: 30px 0;
	border-radius: 20px;
	background-color: ${({theme}) => theme.color.white};

  ${responsiveMixin}
`;

const StyledStartButton = styled(StartButton)`
	margin-bottom: 50px;
`