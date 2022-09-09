import React from "react";
import book from "../../../dflt_itm";
import  { useParams } from 'react-router-dom'

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 16px;
  background: #0000;
  position: relative;
  justify-content: left;
`;

const Place = styled.p`
  width: 100vw;
  padding: 10px;
  font-size: 25px;
  font-family: Arial, sans-serif;
  background-color: #26365b;
  font-weight: bold;
`;

const ItemImage = styled.div`
  width: 70vw;
  flex-grow: 0;
  max-width: 400px;
`

const ItemData = styled.div`
  width: 85vw;
  max-width: 90%; 
  flex-grow: 1;
  margin-top: 3vh;
  padding: 0 20px;
`

const ItemName = styled.h2`
  font-weight: bold;
  font-size: 30px;
`

const ItemPage = () => {
  const params = useParams();
  return (
    <>
      <Place>{params.id}</Place>
      <Container className="elementData">
        <ItemImage className="elementImage"><img src={book.picture} alt="" className="w-100"/></ItemImage>
        <ItemData>
          <ItemName>{book.name}</ItemName>
        </ItemData>
      </Container>
    </>
  );
};

export default ItemPage;
