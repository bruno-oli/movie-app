import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  background: rgba(18, 24, 41, 0.8);
  backdrop-filter: blur(20px);
  position: fixed;
  z-index: 2;
  top: 0;
  & > div {
    display: flex;
    max-width: 1440px;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 120px;
    margin: auto;
    img {
      width: 38px;
    }
    nav {
      display: flex;
      gap: 32px;
      a {
        text-decoration: none;
        color: #a8aebf;
        font-size: 16px;
        &.active {
          color: #9C92F8;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <div>
        <NavLink to={"/movie-app/"}>
          <img src={logo} alt="" />
        </NavLink>
        <nav>
          <NavLink to={"/movie-app/movies"}>Movies</NavLink>
          <NavLink to={"/movie-app/tv-shows"}>TV Shows</NavLink>
          <NavLink to={"/movie-app/suggest-me"}>Suggest me</NavLink>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Header;
