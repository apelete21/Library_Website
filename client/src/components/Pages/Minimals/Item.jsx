import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  background: linear-gradient(90deg, #4040e99d, #ff62008e);
  border-radius: 20px;
  overflow: hidden;
  width: 48%;
`;

const Name = styled.p`
  padding: 5% 7%;
  font-size: 1.2em;
  font-weight: bold;
`;

const Author = styled.p`
  font-size: 1em;
  padding: 0% 7% 5%;
  font-weight: 400;
`;


export default class Item extends Component {
  render() {
    return (
      <>
        <Container className="item">
          <Link to={`${this.props.id}`}>
            <img src={this.props.picture} alt="" className="w-100" />
            <Name>{this.props.id}</Name>
            <Author>
              by <b>{this.props.author}</b>
            </Author>
          </Link>
        </Container>
      </>
    );
  }
}
