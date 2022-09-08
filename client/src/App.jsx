import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import styled from "styled-components";
import Navbar from "./components/global/Navbar";
import LogIn from "./components/Pages/Auth/LogIn";
import SignUp from "./components/Pages/Auth/SignUp";
import RetrivePass from "./components/Pages/Auth/RetrivePass";
import ResetPass from "./components/Pages/Auth/ResetPass";
import Error from "./components/Pages/Error/Error";
import Discover from "./components/Pages/Home/Discover";
import Categories from "./components/Pages/Minimals/Categories";
import CategoryItems from "./components/Pages/Minimals/CategoryItems";
import ItemPage from "./components/Pages/Minimals/ItemPage";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  padding: 45px 0 30px;
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
          <Route path="/discover" element={<Discover />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/:name" element={<CategoryItems />}>
            <Route path="/:name/:id" element={<ItemPage />} />
          </Route>
        </Routes>
      </Wrapper>
    </>
  );
};

export default App;
