import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import styled from "styled-components";
import Navbar from "./components/global/Navbar";
import LogIn from "./components/Pages/LogIn";
import SignUp from "./components/Pages/SignUp";
import RetrivePass from "./components/Pages/RetrivePass";
import ResetPass from "./components/Pages/ResetPass.jsx";
import Error from "./components/Pages/Error";
import Discover from "./components/Pages/Discover";
import Categories from "./components/Pages/Categories";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  padding: 45px 0 30px;
`

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
          <Route path="/discover" element={<Discover />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Wrapper>
    </>
  );
};

export default App;
