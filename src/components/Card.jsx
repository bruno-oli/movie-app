import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import star from "../assets/star.svg";
import imagePlaceholder from "../assets/imagePlaceholder.png"

const Wrapper = styled.div`
  width: 100%;
  height: 480px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: flex-start;
  border-radius: 12px;
  background: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(40px);
  position: relative;
  .vote {
    width: 60px;
    height: 40px;
    padding: 0px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(4px);
    border-radius: 8px;
    position: absolute;
    top: 18px;
    left: 16px;
    z-index: 1;
    img {
      width: 16px;
    }
    span {
      font-weight: 400;
      font-size: 16px;
      color: #ffad49;
    }
  }
  .image__container {
    overflow: hidden;
    border-radius: 8px;
    width: 100%;
    height: 400px;
    img {
      cursor: pointer;
      width: 100%;
      height: 100%;
      transition: scale 0.3s ease-out;
      &:hover {
        scale: 105%;
      }
    }
  }
  .title {
    margin-top: 24px;
    font-size: 16px;
    font-weight: 600;
    color: #ebeef5;
    margin-left: 8px;
  }
`;

const Card = ({ data }) => {
  return (
    <Wrapper>
      <div className="vote">
        <img src={star} alt="" />
        <span>{data.vote_average}</span>
      </div>
      <div className="image__container">
        <Link
          to={
            data.media_type === "tv"
              ? `/movie-app/tv-shows/${data.id}`
              : `/movie-app/movies/${data.id}`
          }
        >
          {data.poster_path === null ? (
            <img src={imagePlaceholder} alt="" />
          ) : (
            <img
              loading="lazy"
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
              alt=""
            />
          )}
        </Link>
      </div>
      <span className="title">
        {data.media_type === "movie" ? data.title : data.name}
      </span>
    </Wrapper>
  );
};

export default Card;
