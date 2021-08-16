import React, {forwardRef} from 'react';
import styled from 'styled-components/macro';

import Field from "Components/Field";

const InputField = forwardRef(({...restProps}, ref) => {

	return (
		<Field title="Sorting Input">
			<Input
			  ref={ref}
				{...restProps}
			/>
		</Field>
	);
});

export default InputField;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 55px;
  border: 1px solid ${({theme}) => theme.color.border};
  border-radius: 4px;
  padding: 0 16px;
	font-size: 25px;
  background-color: ${({theme}) => theme.color.white};
  transition: background-color 0.2s ease-in-out;

  &::placeholder {
    color: ${({theme}) => theme.color.lightGrey};
  }
  &:hover,
  &:focus {
    background-color: ${({theme}) => theme.color.background};
  }
	
	@media screen and ${({theme}) => theme.device.tablet} {
    height: 48px;
    font-size: 18px;
    &::placeholder {
     font-size: 18px;
	    line-height: 1.5;
    }	
	}

  @media screen and ${({theme}) => theme.device.mobile} {
    height: 40px;
    font-size: 14px;
    &::placeholder {
      font-size: 14px;
      line-height: 1.5;
    }
  }
`;