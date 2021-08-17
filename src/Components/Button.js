import React, { forwardRef, memo } from "react";
import styled from "styled-components/macro";

const Button = forwardRef(({ className, clickHandler, children }, ref) => {
  return (
    <Wrapper
      ref={ref}
      type="button"
      className={className}
      onClick={clickHandler}
    >
      {children}
    </Wrapper>
  );
});

export default memo(Button);

const Wrapper = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  border-radius: 4px;
  padding: 0 80px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.blueGrey};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.blueGreyDark};
  }

  @media screen and ${({ theme }) => theme.device.tablet} {
    height: 48px;
    padding: 0 60px;
  }

  @media screen and ${({ theme }) => theme.device.mobile} {
    height: 40px;
    padding: 0 20px;
  }
`;
