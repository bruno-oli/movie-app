import React from "react";
import styled from "styled-components";
import Container from "../styles/Container";

import FilmRolls from "../assets/FilmRolls.svg";
import { Link } from "react-router-dom";
import Button from "../styles/Button";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-bottom: 40px;
    width: 400px;
  }
  h1 {
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #ebeef5;
    margin-bottom: 16px;
  }
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #8e95a9;
  }
  a {
    margin-top: 24px;
    height: 56px;
  }
`;

const Error404 = () => {
  return (
    <Container>
      <Wrapper>
        <img src={FilmRolls} alt="" />
        <h1>Lost your way?</h1>
        <p>
          Oops! This is awkward. You are looking for something that doesn't
          actually exist.
        </p>
        <Link to={"/movie-app/"}>
          <Button>Go Home</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Error404;
