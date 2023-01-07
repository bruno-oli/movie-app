import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Container from "../styles/Container";
import Loading from "react-loading";
import axios from "axios";

import star from "../assets/star.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .loading {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  section {
    .banner {
      width: 100%;
      height: 480px;
      border-radius: 40px;
      position: relative;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      img {
        width: 100%;
      }
      .infos {
        width: 560px;
        height: 144px;
        background: rgba(32, 40, 62, 0.8);
        backdrop-filter: blur(12px);
        border-radius: 24px;
        position: absolute;
        bottom: -72px;
        left: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 8px;
        padding: 0 40px;

        .path {
          display: flex;
          color: #8996a2;
          gap: 8px;
          font-size: 14px;
          a {
            text-decoration: none;
            color: #beb7fb;
            font-weight: 400;
          }
        }
        .title {
          color: #ebeef5;
          font-weight: 600;
          font-size: 32px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .details {
      margin: 152px 80px;
      display: flex;
      gap: 80px;
      align-items: flex-start;
      .poster {
        width: 480px;
        height: 720px;
        border-radius: 24px;
      }
      & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .tagline {
          font-weight: 700;
          font-size: 24px;
          color: #ebeef5;
          margin-bottom: 24px;
        }
        .description {
          font-weight: 400;
          font-size: 20px;
          color: #8e95a9;
        }
        .vote {
          margin: 33px 0;
          height: 32px;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(4px);
          border-radius: 8px;
          display: flex;
          align-items: center;
          padding: 9px;
          gap: 5.3px;
          span {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #ffad49;
          }
          img {
            width: 15px;
          }
        }
        .detail__box {
          display: flex;
          flex-direction: column;
          gap: 8px;
          :not(:last-child) {
            margin-bottom: 24px;
          }
          span {
            :nth-child(1) {
              font-weight: 400;
              font-size: 16px;
              line-height: 24px;
              color: #767e94;
            }
            :nth-child(2) {
              font-weight: 400;
              font-size: 20px;
              line-height: 32px;
              color: #c3c8d4;
            }
          }
        }
        .movie__box {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .tv__box {
          display: grid;
          grid-template-rows: 64px 64px 64px 64px 64px;
          grid-template-columns: 228px 228px;
          row-gap: 24px;
          div {
            &.type {
              grid-area: type;
            }
            &.status {
              grid-area: status;
            }
            &.first__date {
              grid-area: first__date;
            }
            &.last__date {
              grid-area: last__date;
            }
            &.seasons {
              grid-area: seasons;
            }
            &.episodes {
              grid-area: episodes;
            }
            &.episode__runtime {
              grid-area: episode__runtime;
            }
            &.genres {
              grid-area: genres;
            }
          }
          grid-template-areas: 
                              "type status"
                              "first__date last__date"
                              "seasons episodes"
                              "episode__runtime ."
                              "genres genres";
        }
      }
    }
  }
`;

const Detailed = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    function fetchData() {
      axios
        .get(
          `https://api.themoviedb.org/3/${
            window.location.href.includes("tv-shows") ? "tv" : "movie"
          }/${id}?api_key=0841f6fda2b58fa3458961104a12b597&language=en-US`
        )
        .then((response) => {
          setData(response.data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    fetchData();
  }, []);
  return (
    <Container>
      <Wrapper>
        {loading ? (
          <div className="loading">
            <Loading width={55} height={55} color={"#ebeef5"} type={"spin"} />
          </div>
        ) : (
          <section>
            <div
              className="banner"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
              }}
            >
              <div className="infos">
                <div className="path">
                  <Link to={"/movie-app/"}>MaileHereko</Link>
                  <span>/</span>
                  {window.location.href.includes("tv-shows") ? (
                    <Link to={"/movie-app/tv-shows"}>TV Shows</Link>
                  ) : (
                    <Link to={"/movie-app/movies"}>Movies</Link>
                  )}
                </div>
                <h1 className="title">
                  {window.location.href.includes("tv-shows")
                    ? data.name
                    : data.title}
                </h1>
              </div>
            </div>
            <div className="details">
              <img
                className="poster"
                src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                alt=""
              />
              <div>
                <span className="tagline">{data.tagline}</span>
                <span className="description">{data.overview}</span>
                <div className="vote">
                  <img src={star} alt="" />
                  <span>{data.vote_average}</span>
                </div>
                {window.location.href.includes("tv-shows") ? (
                  <div className="tv__box">
                    <div className="detail__box type">
                      <span>Type</span>
                      <span>TV Show</span>
                    </div>
                    <div className="detail__box first__date">
                      <span>First air date:</span>
                      <span>{data.first_air_date}</span>
                    </div>
                    <div className="detail__box last__date">
                      <span>Last air date:</span>
                      <span>{data.last_air_date}</span>
                    </div>
                    <div className="detail__box seasons">
                      <span>No. of seasons</span>
                      <span>{data.number_of_seasons}</span>
                    </div>
                    <div className="detail__box episodes">
                      <span>No. of episodes</span>
                      <span>{data.number_of_episodes}</span>
                    </div>
                    <div className="detail__box status">
                      <span>Status</span>
                      <span>{data.status}</span>
                    </div>
                    <div className="detail__box episode__runtime">
                      <span>Episode run time</span>
                      <span>{data.episode_run_time} min</span>
                    </div>
                    <div className="detail__box genres">
                      <span>Genres</span>
                      <span>
                        {data.genres.map((i, index) => {
                          if (index === data.genres.length - 1) {
                            return `${i.name}`;
                          } else {
                            return `${i.name}, `;
                          }
                        })}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="movie__box">
                    <div className="detail__box">
                      <span>Type</span>
                      <span>Movie</span>
                    </div>
                    <div className="detail__box">
                      <span>Release Date:</span>
                      <span>{data.release_date}</span>
                    </div>
                    <div className="detail__box">
                      <span>Run time</span>
                      <span>{data.runtime} min</span>
                    </div>
                    <div className="detail__box">
                      <span>Genres</span>
                      <span>
                        {data.genres.map((i, index) => {
                          if (index === data.genres.length - 1) {
                            return `${i.name}`;
                          } else {
                            return `${i.name}, `;
                          }
                        })}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </Wrapper>
    </Container>
  );
};

export default Detailed;
