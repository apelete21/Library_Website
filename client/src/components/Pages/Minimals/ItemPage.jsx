import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    margin-inline: auto;
    margin-top: 5%;
    align-items: center;
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
    background-color: #5c5c5c;
    position: sticky;
    top: 0;
    z-index: +3;
    font-weight: bold;
`;

const ItemImage = styled.div`
    width: 70vw;
    height: auto;
    flex-grow: 0;
    max-width: 400px;
    margin-inline: auto;
    overflow: hidden;
    border-radius: 13px;
    overflow: hidden;
`;

const ItemData = styled.div`
    width: 100%;
    max-width: 1500px;
    flex-grow: 1;
    margin-top: 3vh;
    display: grid;
    justify-content: center;
    row-gap: 4vh;
    padding: 0 20px;
`;

const ItemName = styled.h2`
    font-weight: bold;
    font-size: 27px;
    margin-left: 8%;
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
    max-width: 380px;
    margin-inline: auto;
    background: #636363;
    font-weight: bold;
    font-size: 18px;
    border-radius: 10px;
    color: white;
    border: none;
    padding: 10px 10px;
`;

const ItemPage = () => {
    const { id } = useParams();
    const { baseURL } = useContext(UserContext);
    const [Item, setItem] = useState({});
    useState(() => {
        var config = {
            method: "get",
            url: `${baseURL}/file/getOne/${id}`,
            headers: {},
        };

        axios(config)
            .then(function (response) {
                setItem(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    });
    return (
        <>
            <Place>{Item.name}</Place>
            {!Item ? (
                "Loading"
            ) : (
                <Container className="elementData">
                    <ItemImage className="elementImage">
                        <img
                            src={`${baseURL}/file/get/${Item.picture}`}
                            alt=""
                            className="w-100 h-100"
                        />
                    </ItemImage>
                    <ItemData>
                        <ItemName>{Item.name}</ItemName>
                        <ItemAuth>
                            by <b> {Item.author} </b>
                        </ItemAuth>

                        <ItemDesc>
                            {" "}
                            <h2>
                                <b>Synopsis</b> <br />
                            </h2>
                            <p
                                style={{
                                    marginTop: 12,
                                }}
                            >
                                {Item.synopsis}
                            </p>{" "}
                        </ItemDesc>
                        <DlBtn>Download</DlBtn>
                    </ItemData>
                </Container>
            )}
        </>
    );
};

export default ItemPage;
