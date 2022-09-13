import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "../../context/UserContext";

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
        color: #e6e6e689;
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

    const navigate = useNavigate()

    const [fullName, setFullName] = useState();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const [validation, setValidation] = useState()

    const handleFullName = (e) => {
        setFullName(e.target.value);
        setValidation('')
    };

    const handleUserName = (e) => {
        setUserName(e.target.value);
        setValidation('')
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setValidation('')
    };

    const handlePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value);
        setValidation('')
    };

    const signUp = async (e, ) => {

      e.preventDefault()

      if ( password.length < 6 ) {
        setValidation('6 characters minimum !')
        return
      } else if ( password !== passwordConfirm ) {
        setValidation('Passwords do not match !')
        return
      }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            fullName: fullName,
            userName: userName,
            password: password,
        });

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch("https://localhost:5000/signup", requestOptions)
            .then((response) => response.text())
            .then((result) => navigate('/discover'))
            .catch(error => navigate('/error'));
    };

    return (
        <Container>
            <H1 className="LoginTitle">Sign Up</H1>
            <TextPar className="loginText">Let's know you</TextPar>
            <Form className="form" onSubmit={signUp}>
                <Input
                    type="text"
                    placeholder="FullName"
                    className="inputControl"
                    value={fullName}
                    onChange={handleFullName}
                ></Input>
                <Input
                    type="text"
                    placeholder="Username"
                    className="inputControl"
                    value={userName}
                    onChange={handleUserName}
                ></Input>
                <Input
                    type="password"
                    placeholder="Password"
                    className="inputControl"
                    value={password}
                    onChange={handlePassword}
                ></Input>
                <Input
                    type="password"
                    placeholder="Retype Password"
                    className="inputControl"
                    value={passwordConfirm}
                    onChange={handlePasswordConfirm}
                ></Input>
                <p style={{
                  color: 'red'
                }}> {validation} </p>
                <Button className="login loginBtn">Sign Up</Button>
            </Form>
            <TextPar className="LogToSign">
                <span>Already have an account ? </span>
                <Link
                    style={{ color: "#ff877f", fontWeight: "bold" }}
                    to={"/login"}
                >
                    <span>Log In</span>
                </Link>
            </TextPar>
        </Container>
    );
}

export default LogIn;
