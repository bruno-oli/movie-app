import React, { useContext } from "react";
import styled from "styled-components";
import { SuggestContext } from "../../contexts/SuggestContext";
import Button from "../../styles/Button";

const Wrapper = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
  text-align: center;
  p {
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    color: #767e94;
    margin-bottom: 24px;
  }
  button {
    width: 189px;
    height: 56px;
  }
`;

const SuggestManually = () => {
  const { suggestManuallyRef } = useContext(SuggestContext);
  return (
    <Wrapper>
      <p>Didin't find the one you looking for?</p>
      <Button onClick={() => suggestManuallyRef.current.showModal()}>
        Suggest Manually
      </Button>
    </Wrapper>
  );
};

export default SuggestManually;
