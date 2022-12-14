import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Item from "../Minimals/Item";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useState } from "react";

const Container = styled.div`
    width: 100%;
    margin-top: 10px;
    background: #0000;
    display: grid;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-evenly;
`;

const CategorieSection = styled.div`
    display: flex;
    overflow-x: scroll;
    gap: 20px;
    padding-inline: 10px;
`;

const CategorieEl = styled.p`
    background-color: #3290FF;
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
        background-color: #303030;
    }
`;

const Place = styled.p`
    width: 100vw;
    padding: 10px;
    font-size: 25px;
    font-family: Arial, sans-serif;
    background-color: #3290FF;
    font-weight: bold;
`;

const Items = styled.div`
    height: 79vh;
    width: 94%;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 auto;
    padding-block: 2vh;
    column-gap: 2%;
    row-gap: 6%;
`;

const Discover = () => {
    const [categories, setCategories] = useState([]);
    const [mydocData, setMyDocData] = useState([]);

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
        var config1 = {
            method: "get",
            url: `${baseURL}/file/getAll`,
            headers: {},
        };

        axios(config1)
            .then(function (response) {
                setMyDocData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    });

    return (
        <>
            <Place>Discover</Place>
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
                {mydocData.map((item) => (
                    <Item
                        id={item._id}
                        key={item._id}
                        name={item.name}
                        picture={item.picture}
                        author={item.author}
                    />
                ))}
            </Items>
        </>
    );
};

export default Discover;
