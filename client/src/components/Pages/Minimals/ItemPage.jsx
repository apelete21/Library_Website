import React from "react";
import book from "../../../dflt_itm";
import { useParams } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  overflow: scroll;
  padding: 20px 0px;
  position: relative;
  justify-content: left;
`;

const Place = styled.p`
  width: 100vw;
  padding: 10px;
  font-size: 25px;
  font-family: Arial, sans-serif;
  background-color: #323232;
  position: sticky;
  top: 0;
  z-index: +3;
  font-weight: bold;
`;

const ItemImage = styled.div`
  width: 70vw;
  flex-grow: 0;
  max-width: 400px;
  margin-inline: auto;
  border-radius: 10px;
  overflow: hidden;
`;

const ItemData = styled.div`
  width: 100vw;
  max-width: 90%;
  flex-grow: 1;
  margin-top: 3vh;
  display: grid;
  justify-content: center;
  row-gap: 4vh;
  padding: 0 20px;
`;

const ItemName = styled.h2`
  font-weight: bold;
  font-size: 30px;
`;

const ItemDesc = styled.p`
  width: 90%;
  margin-inline: auto;
  font-size: 14px;
`;

const ItemAuth = styled.p`
  width: 90%;
  text-align: right;
  font-size: 14px;
`;

const DlBtn = styled.button`
width: 90%;
max-width: 400px;
margin-inline: auto;
`;

const ItemPage = () => {
  const params = useParams();
  return (
    <>
      <Place>{params.id}</Place>
      <Container className="elementData">
        <ItemImage className="elementImage">
          <img src={book.picture} alt="" className="w-100 h-100" />
        </ItemImage>
        <ItemData>
          <ItemName>{book.name}</ItemName>
          <ItemAuth>
            by <b> {book.author} </b>
          </ItemAuth>

          <ItemDesc>
            {" "}
            <b>Description</b> <hr /> <br /> {book.describe}{" "}
          </ItemDesc>
          <DlBtn>Download</DlBtn>
        </ItemData>
      </Container>
    </>
  );
};

export default ItemPage;
