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
  max-width: 800px;
  height: fit-content;
  padding: 30px 0;
`;

const Input = styled.input`
  width: 100;
  font-size: 18px;
  margin: 15px 0;
  background: rgba(255, 255, 255, 0.31);
  color: #e6e6e6;

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
      <H1 className="LoginTitle">LogIn</H1>
      <TextPar className="loginText">Let us know you</TextPar>
      <Form className='form'>
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
        <TextPar className="PassForget">Forgot Password ?</TextPar>
        <Button className="login loginBtn">Log In</Button>
        <p className="orText">Or Log In With</p>
        <Button className="loginGoogle">
          <img src={Google} className="googleImg" alt="" />
          <span>Log In with Google</span>
        </Button>
      </Form>
      <TextPar className="LogToSign">
        <span>Don't have an account ? </span>
        <Link 
        style={{ color: "#ff877f", fontWeight: 'bold'}}
        to={'/signin'}
        >
            <span> Sign Up</span>
        </Link>
      </TextPar>
    </Container>
  );
}

export default LogIn;
