import React from "react";
import { useState } from "react";

import styled from "styled-components";

import Rating from "./Rating";

const Home = () => {
  const [dayList, setDayList] = useState([
    "월",
    "화",
    "수",
    "목",
    "금",
    "토",
    "일",
  ]);

  return (
    <>
      <MainTitle>내 일주일은?</MainTitle>
      {dayList.map((day, index) => {
        return <Rating key={index} day={day} />;
      })}
    </>
  );
};

const MainTitle = styled.h3``;

export default Home;
