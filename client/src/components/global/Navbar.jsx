import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 10px;
  justify-content: space-between;
  align-items: center;
`;

const Burger = styled.div`
  display: flex;
  gap: 7px;
  justify-content: right;
  flex-direction: column;
  width: 50px;
  max-height: 25px;
`

function Navbar() {
  return (
  <Container>
    <div>Navbar</div>
    <Burger className='burgerMenu'>
      <span></span>
      <span></span>
    </Burger>
  </Container>
  )
}

export default Navbar;
