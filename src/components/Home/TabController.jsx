import React, { useContext, useState } from "react";
import styled from "styled-components";
import { HomeContext } from "../../contexts/HomeContext";

const Wrapper = styled.div`
  width: 368px;
  height: 56px;
  margin-top: 80px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 8px;
  button {
    cursor: pointer;
    height: 100%;
    border: none;
    background: none;
    outline: none;
    font-weight: 600;
    font-size: 16px;
    border-radius: 8px;
    color: #8e95a9;
    transition: background 0.2s;
    &:nth-child(1) {
      width: 85px;
    }
    &:nth-child(2) {
      width: 123px;
    }
    &:nth-child(3) {
      width: 144px;
    }
  }
`;

const TabController = () => {
  const { filters, setFilters } = useContext(HomeContext);
  return (
    <Wrapper>
      <button
        onClick={() =>
          setFilters((prevState) => {
            return { ...prevState, tab: "" };
          })
        }
        style={{
          background: filters.tab == "" && "#7B6EF6",
          color: filters.tab == "" && "#ebe9fe",
        }}
      >
        All
      </button>
      <button
        onClick={() =>
          setFilters((prevState) => {
            return { ...prevState, tab: "movie" };
          })
        }
        style={{
          background: filters.tab == "movie" && "#7B6EF6",
          color: filters.tab == "movie" && "#ebe9fe",
        }}
      >
        Movies
      </button>
      <button
        onClick={() =>
          setFilters((prevState) => {
            return { ...prevState, tab: "tv" };
          })
        }
        style={{
          background: filters.tab == "tv" && "#7B6EF6",
          color: filters.tab == "tv" && "#ebe9fe",
        }}
      >
        TV Shows
      </button>
    </Wrapper>
  );
};

export default TabController;
