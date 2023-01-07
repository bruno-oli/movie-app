import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Like from "../../assets/Like.svg";
import { SuggestContext } from "../../contexts/SuggestContext";
import imagePlaceholder from "../../assets/imagePlaceholder.png";

const Wrapper = styled.div`
  width: 282px;
  height: 520px;
  background: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(40px);
  border-radius: 12px;
  padding: 10px;
  overflow: hidden;
  a {
    &:hover {
      img {
        scale: 105%;
      }
    }
    .image__container {
      width: 100%;
      height: 400px;
      overflow: hidden;
      border-radius: 8px;
      img {
        width: 100%;
        height: 100%;
        transition: scale 0.3s ease-out;
      }
    }
  }
  .title {
    margin-top: 24px;
    margin-left: 8px;
    width: 98%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #ebeef5;
    span {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }
  }
  .like {
    cursor: pointer;
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 16px;
    margin-left: 8px;
    img {
      width: 24px;
    }
    span {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.02em;
      color: #7b6ef6;
    }
  }
`;

const SuggestCard = ({ data }) => {
  const { modalRef } = useContext(SuggestContext);
  return (
    <Wrapper>
      <Link
        to={
          data.media_type === "tv"
            ? `/movie-app/tv-shows/${data.id}`
            : `/movie-app/movies/${data.id}`
        }
      >
        <div className="image__container">
          {data.poster_path === null ? (
            <img src={imagePlaceholder} alt="" />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
              alt=""
            />
          )}
        </div>
      </Link>
      <div className="title">
        <span>{data.media_type === "tv" ? data.name : data.title}</span>
      </div>
      <div
        className="like"
        onClick={() => {
          modalRef.current.showModal();
        }}
      >
        <img src={Like} alt="" />
        <span>Suggest this</span>
      </div>
    </Wrapper>
  );
};

export default SuggestCard;
