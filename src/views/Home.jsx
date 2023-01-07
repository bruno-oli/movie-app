import React from "react";
import ContentBox from "../components/Home/ContentBox";
import Search from "../components/Home/Search";
import TabController from "../components/Home/TabController";
import Container from "../styles/Container";

const Home = () => {
  return (
    <Container>
      <Search />
      <TabController />
      <ContentBox />
    </Container>
  );
};

export default Home;
