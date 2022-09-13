import React from 'react'
import ErrImg from '../../../img/error.svg'
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-top: 60px;
  background: #0000;
  display: grid;
  flex-wrap: wrap;
  justify-content: center;
`;

const ErrorImg = styled.img`
    max-height: 200px;
    max-width: 300px;
    width: 80%;
    margin-inline: auto;
`
const H1 = styled.p`
font-family: cursive;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  font-size: 23px;
  font-weight: bold;
  padding: 10px 0 15px;
  margin-top: 60px;
`;


const TextPar = styled.p`
  padding-inline: 20px;
  font-family: "verdana";
  text-align: center;
`;


const Error = () => {
  return (
    <Container>
        <ErrorImg src={ErrImg} alt="" />
        <H1>An Error Occured</H1>
        <TextPar>
            We're not sure what happened, but we know an error occured
        </TextPar>
    </Container>
  )
}

export default Error