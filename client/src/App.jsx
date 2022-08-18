import React from "react";
import Home from "./components/Pages/Home";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from './components/global/Navbar'
import LogIn from "./components/Pages/LogIn";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  padding: 0px 0 30px;
`;

const App = () => {
  return (
    <>
      <Wrapper className='wrapper'>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<LogIn />} />
        </Routes>
      </Wrapper>
    </>
  );
};

export default App;
