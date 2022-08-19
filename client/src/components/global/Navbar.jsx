import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 10px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  backdrop-filter: blur(3px);
`;

const Burger = styled.div`
  position: relative;
  display: flex;
  gap: 7px;
  justify-content: center;
  flex-direction: column;
  width: 50px;
  height: 100%;
`;

const CloseBtn = styled.div`
  position: absolute;
  display: grid;
  width: 60%;
  height: 100%;
`;

const MenuItems = styled.div`
  display: grid;
  align-items: center;
  gap: 20%;
  position: absolute;
`;

const Items = styled.div`
  display: grid;
  align-items: stretch;
  gap: 30%;
`;

const AuthContainer = styled.div`
  display: grid;
  gap: 10px;
`;
const Button = styled.button`
  border: none;
  width: 100%;
  max-width: 300px;
  margin-inline: auto;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

function Navbar() {
  const [navToggle, setNavToggle] = useState(0);

  const ToggleNavigation = () => {
    if (navToggle === 0) setNavToggle(1);
    if (navToggle === 1) setNavToggle(0);
  };

  return (
    <>
      <Container>
        <MenuItems
          className={navToggle === 1 ? "menuItems" : "menuhide menuItems"}
        >
          <Items>
            <Link to={"/"} onClick={() => ToggleNavigation()}>
              Home
            </Link>
            <Link to={"/"} onClick={() => ToggleNavigation()}>
              Home
            </Link>
            <Link to={"/"} onClick={() => ToggleNavigation()}>
              Home
            </Link>
            <Link to={"/"} onClick={() => ToggleNavigation()}>
              Home
            </Link>
            <Link to={"/"} onClick={() => ToggleNavigation()}>
              Home
            </Link>
          </Items>
          <AuthContainer>
            <Link to="/login">
              <Button className="login">Log In</Button>
            </Link>
            <Link to="/signup">
              <Button className="login loginGoogle">Sign Up</Button>
            </Link>
          </AuthContainer>
        </MenuItems>
        <Link to={"/"}>Navbar</Link>
        <Burger className="burgerMenu" onClick={() => ToggleNavigation()}>
          <span className={navToggle === 1 ? "spanLine0" : ""}></span>
          <span className={navToggle === 1 ? "spanLine0" : ""}></span>
          <CloseBtn className={navToggle === 1 ? "closebtn" : "closebtn0"}>
            <span></span>
            <span></span>
          </CloseBtn>
        </Burger>
      </Container>
    </>
  );
}

export default Navbar;
