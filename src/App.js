import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Home from './Home';
import Review from './Review';

function App() {
  return (
    <AppWrap className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review/:click_day" element={<Review />} />
      </Routes>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  text-align: center;
`;

export default App;
