import React from "react";
import Home from "./components/Pages/Home";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/global/Navbar";
import LogIn from "./components/Pages/LogIn";
import SignUp from "./components/Pages/SignUp";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
  overflow-y: scroll;
  padding: 0px 0 30px;
`;

const App = () => {
  return (
    <>
      <Navbar className="navbarTop" />
      <Wrapper className="wrapper">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<LogIn />} />
          <Route path={"/signup"} element={<SignUp />} />
        </Routes>
      </Wrapper>
    </>
  );
};

export default App;
