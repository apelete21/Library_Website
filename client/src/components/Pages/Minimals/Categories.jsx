import React, { useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Container = styled.div`
    width: 100%;
    margin-top: 10px;
    background: #0000;
    display: grid;
    flex-wrap: wrap;
    position: relative;
`;

const CategorieSection = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: inherit;
    max-width: 800px;
    gap: 20px;
    padding-inline: 10px;
`;
const CategorieEl = styled.div`
    background-color: #005ec9;
    width: max-content;
    text-transform: capitalize;
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
    text-transform: capitalize;
    font-size: 25px;
    font-family: Arial, Geneva, sans-serif;
    background-color: #3290FF;
    font-weight: bold;
`;

const Categories = () => {
    const [categories, setCategories] = useState([]);

    const { baseURL } = useContext(UserContext);

    useState(() => {
        var config = {
            method: "get",
            url: `${baseURL}/categories/lists`,
            headers: {},
        };

        axios(config)
            .then(function (response) {
                setCategories(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    });

    return (
        <>
            <Place>Categories</Place>
            <Container>
                <CategorieSection>
                    {categories.map((item) => (
                        <Link className="listCategories"
                            to={`/categories/${item.category_name}`}
                            key={item.id}
                        >
                            <CategorieEl>{item.category_name}</CategorieEl>
                        </Link>
                    ))}
                </CategorieSection>
            </Container>
        </>
    );
};

export default Categories;
