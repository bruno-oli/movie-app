import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../Card";
import Grid from "../../styles/Grid";
import { HomeContext } from "../../contexts/HomeContext";
import LoadingBox from "../LoadingBox";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 24px;
`;

const ContentBox = () => {
  const LIST_ID = 8234217;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { filters } = useContext(HomeContext);
  let filteredData;
  if (loading === false) {
    filteredData = data.items.filter((i) => {
      if (i.media_type === "tv") {
        if (filters.tab.length) {
          return (
            i.name.toLowerCase().includes(filters.search.toLowerCase()) &&
            i.media_type === filters.tab
          );
        } else {
          return i.name.toLowerCase().includes(filters.search.toLowerCase());
        }
      } else {
        if (filters.tab.length) {
          return (
            i.title.toLowerCase().includes(filters.search.toLowerCase()) &&
            i.media_type === filters.tab
          );
        } else {
          return i.title.toLowerCase().includes(filters.search.toLowerCase());
        }
      }
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
    <Wrapper>
      {loading ? (
        <LoadingBox />
      ) : (
        <section>
          <Grid>
            {filteredData.map((i) => {
              return <Card key={i.id} data={i} />;
            })}
          </Grid>
        </section>
      )}
    </Wrapper>
  );
};

export default ContentBox;
