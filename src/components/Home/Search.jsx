import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HomeContext } from "../../contexts/HomeContext";
import Title from "../../styles/Title";
import Input from "../../styles/Input";

const Wrapper = styled.div`
  width: 588px;
  h1 {
    margin-bottom: 16px;
  }
  p {
    color: #8e95a9;
    a {
      text-decoration: none;
      color: #9c92f8;
      position: relative;
      font-weight: bold;
      &:hover {
        &::after {
          width: 100%;
        }
      }
      &::after {
        position: absolute;
        content: "";
        bottom: -2px;
        left: 0;
        transition: 0.2s ease-in;
        width: 0%;
        height: 4px;
        background-color: #9c92f8;
      }
    }
  }
`;

const Search = () => {
  const { filters, setFilters } = useContext(HomeContext);
  return (
    <Wrapper>
      <Title>MaileHereko</Title>
      <p>
        List of movies and TV Shows, I,{" "}
        <a target={"_blank"} href="https://github.com/bruno-oli">
          Bruno Max
        </a>{" "}
        have watched till date. Explore what I have watched and also feel free
        to make a <Link to={"suggest-me"}>suggestion.</Link> 😉
      </p>
      <Input
        onChange={(e) => {
          setFilters((prevState) => {
            return { ...prevState, search: e.target.value };
          });
        }}
        value={filters.search}
        type="text"
        placeholder="Search Movies or TV Shows"
      />
    </Wrapper>
  );
};

export default Search;
