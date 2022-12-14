import React from "react";
import styled from "styled-components";
import welImg from "../../../img/welcome.svg";
import ArrowRight from "../../../img/ArrowRight.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Container = styled.div`
    width: 100%;
    margin-top: 10px;
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
    padding: 10px 0 15px;
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
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`;

const Home = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <Container>
            <Welcome>
                <H1>Welcome</H1>
                <Img>
                    <img src={welImg} alt="" />
                </Img>
            </Welcome>
            <Link to={"/discover"}>
                <Button className="discover">
                    <span>Discover</span>
                    <img src={ArrowRight} className="arrowRight" alt="" />
                </Button>
            </Link>
            {!currentUser.name ? (
                <>
                    <Link to="/login">
                        <Button className="login">Log In</Button>
                    </Link>
                    <p className="orText">Or</p>
                    <Link to="/signup">
                        <Button className="login loginGoogle">Sign Up</Button>
                    </Link>
                </>
            ) : (
                <Link to="/profile">
                    <Button className="login">Profile</Button>
                </Link>
            )}
        </Container>
    );
};

export default Home;
