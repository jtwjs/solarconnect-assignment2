import React, { useState, useEffect, memo } from "react";
import styled from "styled-components/macro";

import Field from "Components/Field";

function DescField({ nums }) {
  const [isShow, setIsShow] = useState(false);

  const getDescendingOrder = (nums) => {
    let result = quickSort(nums, 0, nums.length - 1);

    return result.join(", ");
  };

  const quickSort = (arr, l, r) => {
    if (l < r) {
      const p = partition(arr, l, r);

      quickSort(arr, l, p - 1);
      quickSort(arr, p + 1, r);
    }

    return arr;
  };

  const partition = (arr, l, r) => {
    const pivot = arr[r];
    let i = l - 1;

    for (let j = l; j <= r - 1; j++) {
      if (arr[j] >= pivot) {
        i++;
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    const temp = arr[i + 1];
    arr[i + 1] = arr[r];
    arr[r] = temp;

    return i + 1;
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
