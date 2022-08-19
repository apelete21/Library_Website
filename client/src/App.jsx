import React from "react";
import Home from "./components/Pages/Home";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/global/Navbar";
import LogIn from "./components/Pages/LogIn";
import SignUp from "./components/Pages/SignUp";
import RetrivePass from "./components/Pages/RetrivePass";
import ResetPass from "./components/Pages/ResetPass.jsx";
import Error from "./components/Pages/Error";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  padding: 30px 0 30px;
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
          <Route path={"/retrivepassword"} element={<RetrivePass />} />
          <Route path={"/resetpassword"} element={<ResetPass />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Wrapper>
    </>
  );
};

export default App;
