import React, { useContext } from "react";
import styled from "styled-components";
import { SuggestContext } from "../../contexts/SuggestContext";
import close from "../../assets/close.svg";
import videoPlay from "../../assets/videoPlay.svg";
import link from "../../assets/link.svg";
import Button from "../../styles/Button";

const Wrapper = styled.dialog`
  width: 560px;
  height: 472px;
  background: rgba(18, 24, 41, 0.8);
  border: 1px solid #20283e;
  backdrop-filter: blur(20px);
  border-radius: 24px;
  top: calc(50% - 236px);
  left: calc(50% - 280px);
  z-index: 3;
  ::backdrop {
    background-color: black;
    opacity: 0.2;
  }
  .close {
    cursor: pointer;
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(12px);
    border-radius: 8px;
    top: 24px;
    right: 24px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.015em;
      color: #c3c8d4;
      margin-bottom: 40px;
    }
    .input {
      width: 400px;
      height: 64px;
      background: rgba(0, 0, 0, 0.1);
      border: 1px solid #323b54;
      border-radius: 12px;
      display: flex;
      align-items: center;
      gap: 18px;
      padding: 0 16px;
      margin-bottom: 16px;
      input {
        width: 90%;
        border: none;
        outline: none;
        background: none;
        color: white;
        ::placeholder {
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          color: #475069;
        }
      }
    }
    button {
      width: 400px;
      height: 56px;
      margin-top: 26px;
    }
  }
`;

const SuggestManuallyDialog = () => {
  const { suggestManuallyRef } = useContext(SuggestContext);
  return (
    <Wrapper ref={suggestManuallyRef}>
      <div className="close" onClick={() => suggestManuallyRef.current.close()}>
        <img src={close} alt="" />
      </div>
      <form>
        <h1>Suggest something to watch</h1>
        <div className="input">
          <img src={videoPlay} alt="" />
          <input type="text" placeholder="Title" />
        </div>
        <div className="input">
          <img src={link} alt="" />
          <input type="text" placeholder="Link (if available)" />
        </div>
        <Button>Suggest</Button>
      </form>
    </Wrapper>
  );
};

export default SuggestManuallyDialog;
