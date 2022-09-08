import React from "react";
import { Link } from "react-router-dom";
import categories from "../../../dflt_cate";
import styled from "styled-components";
import books from "../../../dflt_list";
import Item from "../Minimals/Item";

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  background: #0000;
  display: grid;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
`;

const CategorieSection = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 20px;
  padding-inline: 10px;
`;
const CategorieEl = styled.p`
  background-color: #384c7b;
  width: max-content;
  word-wrap: none;
  display: flex;
  align-items: center;
  border-radius: 19px;
  text-align: center;
  font-weight: bold;
  padding: 4px 10px;
  vertical-align: middle;
  transition: all 0.3s;

  &:hover {
    background-color: #243254;
  }
`;

const Place = styled.p`
  width: 100vw;
  padding: 10px;
  font-size: 25px;
  font-family: Arial, sans-serif;
  background-color: #384c7b;
  font-weight: bold;
`;

const Items = styled.div`
  height: 79vh;
  width: 98%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-block: 2vh;
  column-gap: 2%;
  row-gap: 4%;
`;

const Discover = () => {
  return (
    <>
      <Place>Discover</Place>
      <Container>
        <CategorieSection>
          {categories.map((item, index) => (
            <Link to={`/categories/${item.name}`} key={index}>
              <CategorieEl>{item.name}</CategorieEl>
            </Link>
          ))}
        </CategorieSection>
      </Container>
      <Items>
        {books.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            picture={item.picture}
            author={item.author}
          />
        ))}
      </Items>
    </>
  );
};

export default Discover;
