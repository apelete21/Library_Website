import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
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
    background-color: #4e4e4e;
    width: max-content;
    word-wrap: none;
    display: flex;
    align-items: center;
    border-radius: 19px;
    text-align: center;
    text-transform: capitalize;
    font-weight: bold;
    padding: 4px 10px;
    vertical-align: middle;
    transition: all 0.3s;

    &:hover {
        background-color: #4f4f4f;
    }
`;

const Place = styled.p`
    width: 100vw;
    padding: 10px;
    text-transform: capitalize;
    font-size: 25px;
    font-family: Arial, sans-serif;
    background-color: #5c5c5c;
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

const CategoryItems = () => {
    const params = useParams();

    const [categories, setCategories] = useState([]);

    const { baseURL } = useContext(UserContext);

    useEffect(() => {
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
            <Place>{params.name}</Place>
            <Container>
                <CategorieSection>
                    {categories.map((item) => (
                        <Link
                            to={`/categories/${item.category_name}`}
                            key={item.id}
                        >
                            <CategorieEl>{item.category_name}</CategorieEl>
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

export default CategoryItems;
