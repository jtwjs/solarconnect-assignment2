import React, { useState, memo } from "react";
import styled from "styled-components/macro";

import useInterval from "Utils/Hooks/useInterval";

import Field from "Components/Field";

function Timer({ kind }) {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  const formatDate = (date, name) => {
    const weekKR = ["일", "월", "화", "수", "목", "금", "토"];
    const weekUS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mounthName = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return name
      ? `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${
          weekKR[date.getDay()]
        } ${date.getHours()}:${
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        }:${
          date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
        }`
      : `${date.getHours()}:${
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        } ${weekUS[date.getDay()]} ${
          mounthName[date.getMonth()]
        } ${date.getDate()} ${date.getFullYear()}`;
  };

  const printDate = (cityname) => {
    const time = new Date().getTime();
    const seoul = new Date(time);
    const washington = new Date(time - 780 * 60 * 1000);
    const date = cityname === "KOREA" ? seoul : washington;
    const cityName = cityname === "KOREA" ? true : false;

    return formatDate(date, cityName);
  };

  return (
    <Field
      title={
        kind === "KOREA" ? "Republic of Korea" : "United States of America"
      }
    >
      <PrintDate>{printDate(kind)}</PrintDate>
      <PrintDate hidden>{count}</PrintDate>
    </Field>
  );
}

export default memo(Timer);

const PrintDate = styled.div`
  display: block;
  width: 100%;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.color.white};
  font-size: 2rem;
  text-align: center;
`;
