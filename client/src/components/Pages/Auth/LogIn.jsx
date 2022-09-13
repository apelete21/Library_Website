import React, { useState } from "react";
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
        color: #e6e6e676;
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
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleUserName = (e) => {
        setUserName(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <Container>
            <H1 className="LoginTitle">LogIn</H1>
            <TextPar className="loginText">Welcome back</TextPar>
            <Form className="form">
                <Input
                    type="text"
                    placeholder="Username"
                    className="inputControl"
                    value={userName}
                    onChange={handleUserName}
                ></Input>
                <Input
                    type="text"
                    placeholder="Password"
                    className="inputControl"
                    value={password}
                    onChange={handlePassword}
                ></Input>
                <Link to={"/retrivepassword"}>
                    <TextPar className="PassForget">Forgot Password ?</TextPar>
                </Link>
                <Button className="login loginBtn">Log In</Button>
            </Form>
            <TextPar className="LogToSign">
                <span>Don't have an account ? </span>
                <Link
                    style={{ color: "#ff877f", fontWeight: "bold" }}
                    to={"/signup"}
                >
                    <span> Sign Up</span>
                </Link>
            </TextPar>
        </Container>
    );
}

export default LogIn;
