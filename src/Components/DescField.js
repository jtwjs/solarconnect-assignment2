import React, { useState, useEffect, memo } from "react";
import styled from "styled-components/macro";

import Field from "Components/Field";
import {quickSort} from "Utils/sort";

function DescField({ nums }) {
  const [isShow, setIsShow] = useState(false);

  const getDescendingOrder = (nums) => {
    let result = quickSort(nums, 0, nums.length - 1);

    return result.join(", ");
  };

  useEffect(() => {
    setIsShow(false);
    const timer = setTimeout(() => {
      setIsShow(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [nums]);

  return (
    <Field title="Descending">
      <Container>
        {isShow ? (
          <Content
	          aria-label="내림차순 결과"
            value={isShow && nums ? getDescendingOrder(nums) : ""}
            readOnly
          ></Content>
        ) : (
          nums && "Sorting..."
        )}
      </Container>
    </Field>
  );
}

export default memo(DescField);

const Container = styled.div`
  width: 100%;
  min-height: 65px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Content = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: 25px;
  font-weight: 700;
  resize: none;
  cursor: default;

  @media screen and ${({ theme }) => theme.device.tablet} {
    font-size: 18px;
  }

  @media screen and ${({ theme }) => theme.device.mobile} {
    font-size: 14px;
  }
`;
