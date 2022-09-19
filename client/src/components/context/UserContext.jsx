import { createContext, useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";

export const UserContext = createContext();

export function UserContextProvider(props) {
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const baseURL = "http://localhost:5000";

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
                localStorage.setItem("user", response.data.data);
                setLoggedIn(true);
            })
            .catch(function (error) {
                console.log(error);
            });
        return responseSent;
    };

    // useEffect(() => {
    //     var local = localStorage.getItem("user");
    //     console.log(local);
    // }, []);

    const logOut = () => {
        setLoggedIn(false);
        setCurrentUser({});
        localStorage.removeItem("user");
    };

    return (
        <UserContext.Provider
            value={{
                signUp,
                currentUser,
                LogIn,
                logOut,
                loggedIn,
                baseURL
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}
