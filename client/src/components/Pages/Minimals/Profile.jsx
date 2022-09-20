import React, { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Place = styled.p`
    width: 100vw;
    padding: 10px;
    font-size: 25px;
    font-family: "Poppins", sans-serif;
    background-color: #5c5c5c;
    position: sticky;
    top: 0;
    z-index: +3;
    font-weight: bold;
    line-height: 100%;
`;

const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-inline: auto;
    margin-top: 5%;
    align-items: center;
    overflow: scroll;
    padding: 20px 0px;
    position: relative;
    justify-content: left;
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
const AuthContainer = styled.div`
    display: grid;
    gap: 10px;
`;

const ProfileImage = styled.div`
    background: #fff;
    width: 240px;
    height: 240px;
    border-radius: 100%;
    margin-inline: auto;
`

const User = styled.div`
    margin-top: 10%;
`


function Profile() {
    const {currentUser, userToken, logOut, loggedIn } = useContext(UserContext)
    const [showToken, setShowToken] = useState(false)

    const toggleTokenView = () => {
        if(showToken === true) setShowToken(false)
        if(showToken === false) setShowToken(true)
    }

  return (
    <>
      <Place> {currentUser.name} </Place>
      <Container className='userContainer'>
        <ProfileImage/>
        <User>
            <p className='tac mt-20'>
                <span>Name: </span>  <span className='fwb userelPlace'> {currentUser.name} </span>
            </p>
            <p className='tac mt-20'>
                <span>Email: </span> <span className='fwb userelPlace'> {currentUser.email} </span>
            </p>
            <p className='tac mt-20'>
                <span>Id: </span> <span className='fwb userelPlace'> {currentUser._id} </span>
            </p>
            <p className='tac mt-20'>
                <span>Current Token: </span> <span onClick={toggleTokenView} className='userelPlace'> {!showToken ? 'Show token' : userToken} </span>
            </p>
            {loggedIn && (
                        <AuthContainer>
                            <Link to="/discover" onClick={() => logOut()}>
                                <Button
                                    className="login loginGoogle"
                                >
                                    Log Out
                                </Button>
                            </Link>
                        </AuthContainer>
                    )}
        </User>
      </Container>
    </>
  )
}

export default Profile
