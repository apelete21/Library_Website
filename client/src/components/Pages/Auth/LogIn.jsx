import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

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

function LogInFunc() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [validation, setValidation] = useState();
    const [blue, setBlue] = useState();

    const navigate = useNavigate()

    const { LogIn } = useContext(UserContext);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setValidation('')
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setValidation('')
    };

    async function handleForm(e) {
        e.preventDefault();

        const userData = {
            value: {
                "email": email,
                "password": password,
            },
        };

        try {
            const reqFunc = await LogIn(userData);
            console.log(reqFunc);
            if (reqFunc.status === 'success') {
                setBlue("Login Successfull !");
                setValidation('')
                setTimeout(() => {
                    navigate("/discover");
                }, 2000);
            } else setValidation(reqFunc.message)
        } catch (error) {
            console.log(error);
            setValidation("There's an Error, Try again !");
        }
    }

    return (
        <Container>
            <H1 className="LoginTitle">LogIn</H1>
            <TextPar className="loginText">Welcome back</TextPar>
            <Form className="form" onSubmit={handleForm}>
                <Input
                    type="email"
                    placeholder="Email"
                    className="inputControl"
                    value={email}
                    onChange={handleEmail}
                ></Input>
                <Input
                    type="password"
                    placeholder="Password"
                    className="inputControl"
                    value={password}
                    onChange={handlePassword}
                ></Input>
                <Link to={"/retrivepassword"}>
                    <TextPar className="PassForget">Forgot Password ?</TextPar>
                </Link>
                <>
                    <p
                        style={{
                            color: "red",
                            marginTop: 4,
                        }}
                    >
                        {" "}
                        {validation}{" "}
                    </p>
                    <p
                        style={{
                            color: "green",
                            marginTop: 4,
                        }}
                    >
                        {" "}
                        {blue}{" "}
                    </p>
                </>
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

export default LogInFunc;
