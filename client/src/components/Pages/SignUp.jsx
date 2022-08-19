import React from "react";
import Google from "../../img/Google.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: block;
`;

const H1 = styled.h1`
  font-weight: bold;
  text-align: center;
`;

const TextPar = styled.p`
  font-style: italic;
`;

const Form = styled.form`
  display: grid;
  margin: 30px auto;
  width: 80%;
  max-width: 300px;
  height: fit-content;
  padding: 30px 0;
`;

const Input = styled.input`
  width: 100;
  font-size: 18px;
  margin: 15px 0;
  background: rgba(255, 255, 255, 0.31);

  &::placeholder {
    color: #e6e6e6;
  }
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

function LogIn() {
  return (
    <Container>
      <H1 className="LoginTitle">Sign Up</H1>
      <TextPar className="loginText">Let's get in touch</TextPar>
      <Form className="form">
        <Input
          type="text"
          placeholder="FullName"
          className="inputControl"
        ></Input>
        <Input
          type="text"
          placeholder="Username"
          className="inputControl"
        ></Input>
        <Input
          type="text"
          placeholder="Password"
          className="inputControl"
        ></Input>
        <Input
          type="text"
          placeholder="Retype Password"
          className="inputControl"
        ></Input>
        <Button className="login loginBtn">Sign Up</Button>
        <p className="orText">Or Sign Up With</p>
        <Button className="loginGoogle">
          <img src={Google} className="googleImg" alt="" />
          <span>Sign Up with Google</span>
        </Button>
      </Form>
      <TextPar className="LogToSign">
        <span>Already have an account ? </span>
        <Link style={{ color: "#ff877f", fontWeight: "bold" }} to={"/login"}>
          <span>Log In</span>
        </Link>
      </TextPar>
    </Container>
  );
}

export default LogIn;
