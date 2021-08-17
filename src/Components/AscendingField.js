import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";

import Field from "Components/Field";

export default function Ascending() {
  const [ascendingArr, setAscendingArr] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      selectionSort(mock);
    }, 3000);
  }, []);

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

    setAscendingArr(arr);
  };

  return (
    <Field title="Ascending">
      <Result>
        {ascendingArr.map((ele, index) => (
          <span key={index}>{ele}</span>
        ))}
      </Result>
    </Field>
  );
}

const Result = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 4px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.color.white};

  span {
    padding-right: 10px;
  }
`;

const mock = [2, 56, 12, 53, 1, 0, 35, 4, 8, 51, 29, 41];
