import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    background: #444;
    border-radius: 20px;
    overflow: hidden;
    width: 48%;
    height: max-content;
    align-content: space-between;
    min-height: 350px;
`;

const Name = styled.p`
    padding: 5% 7%;
    font-size: 1em;
    font-weight: bold;
`;

const Author = styled.p`
    font-size: 0.7em;
    padding: 0% 7% 5%;
    color: #42bff1;
    font-weight: 400;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 250px;
    overflow: hidden;
`;

export default function Item(props) {
    const { baseURL } = useContext(UserContext);
    return (
        <>
            <Container className="item">
                <Link to={`${props.id}`} target={""}>
                    <ImageContainer>
                        <img
                            src={`${baseURL}/file/get/${props.picture}`}
                            alt="docImage"
                            className="w-100 h-100"
                        />
                    </ImageContainer>
                    <div>
                        <Name>{props.name}</Name>
                        <Author>
                            by <b>{props.author}</b>
                        </Author>
                    </div>
                </Link>
            </Container>
        </>
    );
}
