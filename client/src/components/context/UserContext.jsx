import { createContext, useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";

export const UserContext = createContext();

export function UserContextProvider(props) {
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const baseURL = "http://localhost:5000";
    const [userToken, setUserToken] = useState();
    const [tokenExpirationTime, setTokenExpirationTime] = useState();

    const signUp = async (data) => {
        var responseSent;

        var userData = qs.stringify({
            name: data.value.name,
            email: data.value.email,
            password: data.value.password,
        });
        var config = {
            method: "post",
            url: `${baseURL}/users/register`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: userData,
        };

        await axios(config)
            .then(function (response) {
                responseSent = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        return responseSent;
    };

    const LogIn = async (data) => {
        var responseSent;

        var userData = qs.stringify({
            email: data.value.email,
            password: data.value.password,
        });
        var config = {
            method: "post",
            url: `${baseURL}/users/authenticate`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: userData,
        };

        await axios(config)
            .then(function (response) {
                responseSent = response.data;
                setCurrentUser(response.data.data.user);
                setUserToken(response.data.data.token);
                // localStorage.setItem("data", response.data.data);
                setLoggedIn(true);
                const expiration = new Date(
                    new Date().getTime() + 1000 * 60 * 60
                );
                setTokenExpirationTime(expiration); //set expiration time one hour from current time
                localStorage.setItem(
                    "userData",
                    JSON.stringify({
                        currentUser,
                        expirationTime: expiration.toISOString(),
                    })
                );
            })
            .catch(function (error) {
                console.log(error);
            });
        return responseSent;
    };

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("userData"));
        if (
            storedData &&
            storedData.token &&
            new Date(storedData.expirationTime) > new Date()
        ) {
            LogIn(storedData.currentUser);
        }
    });

    const logOut = () => {
        setLoggedIn(false);
        setCurrentUser(null);
        setUserToken(null);
        setTokenExpirationTime(null);
        localStorage.removeItem("userData");
    };

    return (
        <UserContext.Provider
            value={{
                signUp,
                currentUser,
                LogIn,
                logOut,
                loggedIn,
                baseURL,
                userToken,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}
