import React from 'react';
import styled from 'styled-components/macro';

export default function Field({title, children}) {
	return (
		<Wrapper>
			<StyledTitle>{title}</StyledTitle>
			{children}
		</Wrapper>
	);
};

const Wrapper = styled.article`
	width: 80%;
`;

const StyledTitle = styled.h2`
	display: block;
	margin-bottom: 10px;
	font-size: 20px;
	font-weight: 700;
`

