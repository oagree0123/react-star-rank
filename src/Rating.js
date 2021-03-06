import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Rating = (props) => {
  const days = props.day;
  const rank =  Math.floor(Math.random(0) * 5) + 1;
  const navigate = useNavigate();

  return (
    <RankWrap>
      <DayTitle>{days}</DayTitle>
      {
        [...Array(5)].map((star, index) => {
          console.log(rank)
          if(index !== 4) {
            return(
              (index < rank) ?
              <RankCircle 
                className={rank}
                key={index} 
                style={{backgroundColor: "rgb(255, 235, 59)"}}
              /> :
              <RankCircle className={rank} key={index} />
              
            );
          } else {
            return(
              (index < rank) ?
              <RankCircle 
                className={rank}
                key={index} 
                style={{backgroundColor: "rgb(255, 235, 59)"}}
              > {rank} </RankCircle>:
              <RankCircle className={rank} key={index}> {rank} </RankCircle>
            );
          }
        })
      }
      {/* <RankNum>{rank}</RankNum> */}
      <TriButton onClick={() => {navigate(`/Review/${days}`)}} />
    </RankWrap>
  );
};

const RankWrap = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DayTitle = styled.p`
  margin: 0px 0.5rem 0px 0px;
  font-weight: bold;
`;

const RankNum = styled.h1`
  margin: 0;
  padding: 0 0.5rem;
  text-align: center;
`;

const RankCircle = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: rgb(221, 221, 221);
  border-radius: 30px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const TriButton = styled.div`
  appearance: none;
  background-color: transparent;
  border-color: transparent purple;
  width: 0px;
  height: 0px;
  border-top-width: 1rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  color: rgb(255, 255, 255);

  &:hover {
    cursor: pointer;
  }
`;

export default Rating;
