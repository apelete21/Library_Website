import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import Item from "../Minimals/Item";

const Container = styled.div`
    width: 98%;
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
    column-gap: 4%;
    row-gap: 4%;
`;

const CategoryItems = () => {
    const params = useParams();

    const [categories, setCategories] = useState([]);
    const [catData, setCatData] = useState([]);

    const { baseURL } = useContext(UserContext);

    useEffect(() => {
        var config1 = {
            method: "get",
            url: `${baseURL}/categories/lists`,
            headers: {},
        };

        axios(config1)
            .then(function (response) {
                setCategories(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        var config = {
            method: "get",
            url: `${baseURL}/file/category/${params.name}`,
            headers: {},
        };

        axios(config)
            .then(function (response) {
                setCatData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [params.name, baseURL]);

    return (
        <>
            <Place>{params.name}</Place>
            <Container>
                <CategorieSection>
                    {categories.map((item) => (
                        <Link
                            to={`/categories/${item.category_name}`}
                            key={item._id}
                        >
                            <CategorieEl>{item.category_name}</CategorieEl>
                        </Link>
                    ))}
                </CategorieSection>
            </Container>
            <Items>
                {catData.map((item) => (
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

export default CategoryItems;
