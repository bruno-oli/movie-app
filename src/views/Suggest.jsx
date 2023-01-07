import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import LoadingBox from "../components/LoadingBox";
import NoResults from "../components/Suggest/NoResults";
import SuggestCard from "../components/Suggest/SuggestCard";
import { SuggestContext } from "../contexts/SuggestContext";
import Container from "../styles/Container";
import Grid from "../styles/Grid";
import Input from "../styles/Input";
import Title from "../styles/Title";
import Button from "../styles/Button";
import SuggestManually from "../components/Suggest/SuggestManually";
import SuggestedDialog from "../components/Suggest/SuggestedDialog";
import SuggestManuallyDialog from "../components/Suggest/SuggestManuallyDialog";

const Wrapper = styled.div`
  max-width: 100%;
  .title__box {
    width: 588px;
    p {
      margin-top: 16px;
      font-weight: 400;
      font-size: 16px;
      color: #8e95a9;
      width: 100%;
    }
  }
  .search__box {
    margin-top: 24px;
    height: 64px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 80px;
  }
  .content {
    width: 100%;
    div {
      width: 100%;
    }
  }
`;

const Suggest = () => {
  const { data, setData, modalRef, search, setSearch } =
    useContext(SuggestContext);
  const [loading, setLoading] = useState(false);
  function fetchdata() {
    if (search.length > 0) {
      setLoading(true);
      axios
        .get(
          `https://api.themoviedb.org/3/search/multi?api_key=0841f6fda2b58fa3458961104a12b597&language=en-US&query=${search}&page=1&include_adult=false`
        )
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }
  return (
    <Container>
      <Wrapper>
        <SuggestedDialog />
        <SuggestManuallyDialog />
        <div className="title__box">
          <Title>Suggest me</Title>
          <p>
            I will really appericiate it if you take time to suggest me
            something good to watch.
          </p>
        </div>
        <div className="search__box">
          <Input
            value={search}
            style={{ marginTop: "0" }}
            placeholder="Search Movies or TV Shows"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.which == 13) {
                fetchdata();
              }
            }}
          />
          <Button onClick={fetchdata}>Search</Button>
        </div>
        {loading ? (
          <LoadingBox />
        ) : (
          <div className="content">
            {data && (
              <div>
                {data.total_results > 0 ? (
                  <div>
                    <Grid>
                      {data.results.map((i) => {
                        return <SuggestCard key={i.id} data={i} />;
                      })}
                    </Grid>

                    <SuggestManually />
                  </div>
                ) : (
                  <NoResults />
                )}
              </div>
            )}
          </div>
        )}
      </Wrapper>
    </Container>
  );
};

export default Suggest;
