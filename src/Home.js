import React from "react";
import { useState } from "react";

import styled from "styled-components";

import Rating from "./Rating";

const Home = () => {
  const dayList = [
    "월",
    "화",
    "수",
    "목",
    "금",
    "토",
    "일",
  ];

  return (
    <Container>
      <MainTitle>내 일주일은?</MainTitle>
      {dayList.map((day, index) => {
        return <Rating key={index} day={day} />;
      })}
    </Container>
  );
};

const MainTitle = styled.h3``;

const Container = styled.div`
  margin: 5vh auto;
  padding: 5vh 0;
  width: 80vw;
  height: 90vh;
  max-width: 350px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
`;

export default Home;
