import { createContext, useEffect, useState } from "react";
import axios from "axios"
import qs from 'qs'

const baseURL = "http://localhost:5000"

export const UserContext = createContext();

export function UserContextProvider(props) {
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    const signUp = async (data) => {
        var responseSent;

        var userData = qs.stringify({
            'name': data.value.name,
            'email': data.value.email,
            'password': data.value.password 
          });
          var config = {
            method: 'post',
            url: `${baseURL}/users/register`,
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : userData
          };
          
         await axios(config)
          .then(function (response) {
            responseSent = response.data
          })
          .catch(function (error) {
            console.log(error);
          });
        return responseSent
    };

    const LogIn = async (data) => {
        var responseSent;

        var userData = qs.stringify({
            'email': data.value.email,
            'password': data.value.password
          });
          var config = {
            method: 'post',
            url: `${baseURL}/users/authenticate`,
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : userData
          };
          
         await axios(config)
          .then(function (response) {
            responseSent = response.data
            setCurrentUser(response.data.data.user)
            setLoggedIn(true)
          })
          .catch(function (error) {
            console.log(error);
          });
          
        return responseSent
    };

    useEffect(() => {}, []);

    return (
        <UserContext.Provider value={{ signUp, currentUser, LogIn }}>
            {props.children}
        </UserContext.Provider>
    );
}
