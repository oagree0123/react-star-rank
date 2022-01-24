import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

const Review = (props) => {
  const [starRank, setStarRank] = useState(0);
  const today = useParams();
  const navigate = useNavigate();

  const changeRank = (clickRank) => {
    setStarRank(clickRank + 1);
  }

  const useKeyPress = e => {
    if(e.key >= 1 && e.key <= 5){
      setStarRank(e.key)
    }
    else {
      alert("1부터 5까지의 숫자만 입력해 주세요!")
    }
  }

  useEffect(() => {
    window.addEventListener("keypress", useKeyPress);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keypress", useKeyPress);
    };
  }, []);

  return (
    <ReviewWrap>
      <ReviewTitle>
        <span
          style={{
            marginRight: "4px",
            padding: "0.2rem",
            fontWeight: "900",
            color: "#fff",
            background: "orange",
            borderRadius: "5px"
          }}
        >{today.click_day}요일</span>
        평점 남기기
      </ReviewTitle>
      <CircleWrap>
      {
        [...Array(5)].map((val, index) => {
          return(
            (index < starRank) ?
            <RankCircle 
              className={starRank}
              key={index} 
              style={{backgroundColor: "rgb(255, 235, 59)"}}
              onClick={() => changeRank(index)}
            /> :
            <RankCircle 
              className={starRank}
              key={index} 
              onClick={() => changeRank(index)}
            />
          );
        })
      }
      </CircleWrap>
      <ReviewButton onClick={() => {navigate(`/`)}}>
        평점 남기기
      </ReviewButton>
    </ReviewWrap>
  );
}

const ReviewWrap = styled.div`
  margin: 5vh auto;
  padding: 5vh 5vw;
  width: 80vw;
  height: 90vh;
  max-width: 350px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
`;

const ReviewTitle = styled.h3`

`;

const CircleWrap = styled.div`
  margin: 1rem 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RankCircle = styled.div`
  margin: 5px;
  width: 30px;
  height: 30px;
  background-color: rgb(221, 221, 221);
  border-radius: 30px;
`;

const ReviewButton = styled.button`
  padding: 1rem;
  width: 100%;
  color: #fff;
  background-color: purple;
  border: none;
  border-radius: 5px;
`;


export default Review;