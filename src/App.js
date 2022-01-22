import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Home from './Home';
import Review from './Review';

function App() {
  return (
    <AppWrap className="App">
      <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review/:click_day" element={<Review />} />
      </Routes>
      </Container>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  text-align: center;
`;

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

export default App;
