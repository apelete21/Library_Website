import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import categories from "../../../dflt_cate";

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  background: #0000;
  display: grid;
  flex-wrap: wrap;
  position: relative;
`;

const CategorieSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  overflow-y: scroll;
  margin-inline: auto;
  gap: 20px;
  padding-inline: 10px;
`;
const CategorieEl = styled.p`
  background-color: #555;
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
    background-color: #333;
  }
`;

const Place = styled.p`
  width: 100vw;
  padding: 10px;
  font-size: 25px;
  font-family: Arial, Geneva, sans-serif;
  background-color: #474747;
  font-weight: bold;
`

const Categories = () => {
  
  return (
    <>
    <Place>Categories</Place>
      <Container>
        <CategorieSection>
          {categories.map((item, index) => (
            <Link to={`/categories/${item.name}`} key={index}>
              <CategorieEl>{item.name}</CategorieEl>
            </Link>
          ))}
        </CategorieSection>
      </Container>
    </>
  );
};

export default Categories;
