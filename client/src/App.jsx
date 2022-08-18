import React from "react";
import Home from "./components/Pages/Home";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from './components/global/Navbar'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  padding: 30px 0;
`;

const App = () => {
  return (
    <>
      <Wrapper className='wrapper'>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </Wrapper>
    </>
  );
};

export default App;
