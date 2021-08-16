import React from 'react';
import styled from 'styled-components/macro';

import Field from "Components/Field";

export default function InputField({inputText, handleInputText}) {

	return (
		<Field title="Sorting Input">
			<Input
			  value={inputText}
				onChange={handleInputText}
			/>
		</Field>
	);
};


const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  border: 1px solid ${({theme}) => theme.color.border};
  border-radius: 4px;
  padding: 0 16px;
  background-color: ${({theme}) => theme.color.white};
  transition: background-color 0.2s ease-in-out;

  &::placeholder {
    color: ${({theme}) => theme.color.lightGreyA};
  }

  &:hover,
  &:focus {
    background-color: ${({theme}) => theme.color.background};
  }
`;