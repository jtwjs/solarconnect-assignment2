import React from "react";
import styled from "styled-components/macro";

export default function Field({ className, title, children }) {
  return (
    <Wrapper className={className}>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: 80%;
`;

const StyledTitle = styled.h3`
  display: block;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.blueGreyDark};

  @media screen and ${({ theme }) => theme.device.mobile} {
    margin-bottom: 10px;
  }
`;
