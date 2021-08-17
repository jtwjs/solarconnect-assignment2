import React, { useEffect, useState, memo } from "react";
import styled from "styled-components/macro";

import Field from "Components/Field";
import {selectionSort} from "Utils/sort";

function AscField({ nums }) {
  const [ascendingArr, setAscendingArr] = useState([]);

  useEffect(() => {
    const ascArr = selectionSort(nums);

	  setAscendingArr(ascArr.join(", "));
  }, [nums]);

  return (
    <Field title="Ascending">
      <Result
	      aria-label="오름차순 결과"
	      value={ascendingArr}
	      readOnly
      ></Result>
    </Field>
  );
}

export default memo(AscField);

const Result = styled.textarea`
  width: 100%;
  height: 100%;
  min-height: 65px;
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
