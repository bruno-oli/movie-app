import React from "react";
import styled from "styled-components";
import Loading from "react-loading";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LoadingBox = () => {
  return (
    <Wrapper>
      <Loading width={55} height={55} color={"#ebeef5"} type={"spin"} />
    </Wrapper>
  );
};

export default LoadingBox;
