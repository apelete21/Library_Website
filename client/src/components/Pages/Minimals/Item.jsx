import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  background: linear-gradient(90deg, #4040e99d, #ff62008e);
  border-radius: 20px;
  overflow: hidden;
  width: 48%;
  height: fit-content;
`;

const Name = styled.p`
  padding: 5% 7%;
  font-size: 1.2em;
  font-weight: bold;
`;

const Author = styled.p`
  font-size: 1em;
  padding: 0% 7% 5%;
  font-weight: 400;
`;

export default function Item(props) {
  return (
    <>
      <Container className="item">
        <Link to={`${props.id}`}>
          <img src={props.picture} alt="" className="w-100" />
          <Name>{props.id}</Name>
          <Author>
            by <b>{props.author}</b>
          </Author>
        </Link>
      </Container>
    </>
  );
}
