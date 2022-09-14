import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";

const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 45px;
    max-height: 50px;
    padding: 8px 10px;
    z-index: 20;
    /* overflow-x: hidden; */
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    background: #222;
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
    align-content: space-between;
    gap: 20%;
    position: absolute;
`;

const Items = styled.div`
    display: grid;
    align-items: stretch;
    gap: 20%;
    font-weight: bold;
    font-size: 18px;
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

    const { currentUser } = useContext(UserContext);

    return (
        <>
            <Container>
                <MenuItems
                    className={
                        navToggle === 1 ? "menuItems" : "menuhide menuItems"
                    }
                >
                    <Items>
                        <Link
                            to={"/discover"}
                            onClick={() => ToggleNavigation()}
                        >
                            Discover
                        </Link>
                        <Link to={"/"} onClick={() => ToggleNavigation()}>
                            Welcome Page
                        </Link>
                        <Link
                            to={"/categories"}
                            onClick={() => ToggleNavigation()}
                        >
                            Categories
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
                            <Button
                                className="login"
                                onClick={() => ToggleNavigation()}
                            >
                                Log In
                            </Button>
                        </Link>
                        <Link to="/signup">
                            <Button
                                className="login loginGoogle"
                                onClick={() => ToggleNavigation()}
                            >
                                Sign Up
                            </Button>
                        </Link>
                    </AuthContainer>
                </MenuItems>
                <div>
                    <Link to={"/dashboard"}>
                        {" "}
                        <b>{currentUser.name ? currentUser.name : "Guest"}</b>
                    </Link>
                </div>
                <Link to={"/discover"} style={{
                  textAlign: 'center',
                  width: 'max-content',
                }}>
                    <div> <b>Home</b> </div>
                </Link>
                <Burger
                    className="burgerMenu"
                    onClick={() => ToggleNavigation()}
                >
                    <span className={navToggle === 1 ? "spanLine0" : ""}></span>
                    <span className={navToggle === 1 ? "spanLine0" : ""}></span>
                    <CloseBtn
                        className={navToggle === 1 ? "closebtn" : "closebtn0"}
                    >
                        <span></span>
                        <span></span>
                    </CloseBtn>
                </Burger>
            </Container>
        </>
    );
}

export default Navbar;
