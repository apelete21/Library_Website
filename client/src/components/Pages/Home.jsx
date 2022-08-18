import React from "react";
import styled from "styled-components";
import welImg from "../../img/welcome.svg";
import ArrowRight from "../../img/ArrowRight.svg";
import Google from "../../img/Google.svg";

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  background: #0000;
  display: grid;
  flex-wrap: wrap;
`;

const Welcome = styled.div`
  display: block;
`;
const H1 = styled.p`
  text-align: center;
  width: 100%;
  font-size: 34px;
  font-weight: bold;
  padding: 30px 0 15px;
`;
const Img = styled.div`
  display: grid;
  padding: 30px 0 30px;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  width: 100%;
  max-width: 300px;
  margin-inline: auto;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const Home = () => {
  return (
    <Container>
      <Welcome>
        <H1>Welcome</H1>
        <Img>
          <img src={welImg} alt="" />
        </Img>
      </Welcome>
      <Button className="discover">
        <span>Discover</span>
        <img src={ArrowRight} className="arrowRight" alt="" />
      </Button>
      <Button className="login">Log In</Button>
      <p className="orText">Or</p>
      <Button className="loginGoogle">
        <img src={Google} className="googleImg" alt="" />
        <span>Sign In with Google</span>
      </Button>
    </Container>
  );
};

export default Home;
