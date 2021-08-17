import React, { useEffect, useState, memo } from "react";
import styled from "styled-components/macro";

import Field from "Components/Field";

function AscField({ nums }) {
  const [ascendingArr, setAscendingArr] = useState([]);

  useEffect(() => {
    selectionSort(nums);
  }, [nums]);

  const selectionSort = (input) => {
    let arr = [...input];

    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < arr.length; j++) {
        if (arr[minIndex] > arr[j]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }

    setAscendingArr(arr.join(", "));
  };

  return (
    <Field title="Ascending">
      <Result value={ascendingArr} readOnly></Result>
    </Field>
  );
}

export default memo(AscField);

const Result = styled.textarea`
  width: 100%;
  height: 100%;
  min-height: 50px;
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
