import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../styles/Container";
import Title from "../styles/Title";
import Input from "../styles/Input";
import axios from "axios";
import LoadingBox from "../components/LoadingBox";
import Grid from "../styles/Grid";
import Card from "../components/Card";

const Wrapper = styled.div`
  & > a {
    color: #beb7fb;
    font-weight: 400;
    font-size: 16px;
    text-decoration: none;
  }
  .container {
    margin-top: 48px;
    .count {
      margin-bottom: 24px;
      font-weight: 400;
      font-size: 16px;
      color: #767e94;
    }
  }
`;

const Movies = () => {
  const LIST_ID = 8234217;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  let filteredList;
  if (loading === false) {
    filteredList = data.items.filter((i) => {
      return (
        i.media_type === "movie" &&
        i.title.toLowerCase().includes(search.toLowerCase())
      );
    });
  }
  useEffect(() => {
    function fetchData() {
      axios
        .get(
          `https://api.themoviedb.org/3/list/${LIST_ID}?api_key=0841f6fda2b58fa3458961104a12b597&language=en-US`
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
        <Link to={"/movie-app/"}>MaileHereko</Link>
        <Title>Movies</Title>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movies"
        />
        {loading ? (
          <LoadingBox />
        ) : (
          <div className="container">
            <div className="count">
              <span>{filteredList.length} items</span>
            </div>
            <Grid>
              {filteredList.map((i) => {
                return <Card data={i} key={i.id} />;
              })}
            </Grid>
          </div>
        )}
      </Wrapper>
    </Container>
  );
};

export default Movies;
