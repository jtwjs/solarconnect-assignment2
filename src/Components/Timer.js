import React from "react";
import styled from "styled-components/macro";

import Field from "Components/Field";

export default function Timer({kind}) {
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
			"Sepr",
			"Oct",
			"Nov",
			"Dec",
		];
		// console.log("date", date.toDateString());

		return name
			? `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${
				weekKR[date.getDay()]
			} ${date.getHours()}:${date.getMinutes()}`
			: `${date.getHours()}:${date.getMinutes()} ${weekUS[date.getDay()]} ${
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
		<Field title={kind}>
			<TimerContainer>
				<PrintTimer>{kind === "KOREA" ? "서울" : "워싱턴"}</PrintTimer>
				<PrintCountry>{printDate(kind)}</PrintCountry>
			</TimerContainer>
		</Field>
	);
}

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PrintTimer = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

const PrintCountry = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;
