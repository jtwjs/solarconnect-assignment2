import React from 'react';
import styled from 'styled-components/macro';

export default function Field({className, title, children}) {
	return (
		<Wrapper className={className}>
			<StyledTitle>{title}</StyledTitle>
			{children}
		</Wrapper>
	);
};

const Wrapper = styled.article`
	width: 80%;
	
	&:not(:last-child) {
		margin-bottom: 50px;
	}

  @media screen and ${({theme}) => theme.device.tablet} {
    &:not(:last-child) {
      margin-bottom: 40px;
    }	
  }

  @media screen and ${({theme}) => theme.device.mobile} {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;

const StyledTitle = styled.h3`
	display: block;
	margin-bottom: 20px;
	font-size: 20px;
	font-weight: 700;
	color: ${({theme}) => theme.color.blueGreyDark};
`

