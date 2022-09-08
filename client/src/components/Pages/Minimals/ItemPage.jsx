import React, { useParams } from "react";
import book from "../../../dflt_itm";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  background: #0000;
  display: grid;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
`;

const Place = styled.p`
  width: 100vw;
  padding: 10px;
  font-size: 25px;
  font-family: Arial, sans-serif;
  background-color: #26365b;
  font-weight: bold;
`;

const ItemPage = () => {
  const params = useParams();
  return (
    <>
      <Place>{params.id}</Place>
      <Container>
        {book.author}
      </Container>
    </>
  );
};

export default ItemPage;
