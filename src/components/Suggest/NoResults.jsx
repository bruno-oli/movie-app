import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    color: #ebeef5;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    color: #767e94;
    margin-bottom: 56px;
  }
  button {
    cursor: pointer;
    width: 189px;
    height: 56px;
    background: #7b6ef6;
    border: 2px solid #7b6ef6;
    border-radius: 12px;
    outline: none;
    font-size: 14px;
    color: #ffffff;
  }
`;

const NoResults = () => {
  return (
    <Wrapper>
      <h1>Sorry, No results found</h1>
      <p>
        There are no movies or TV shows matching your search terms. You can
        suggest me manually
      </p>
      <button>Suggest Manually</button>
    </Wrapper>
  );
};

export default NoResults;
