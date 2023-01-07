import React, { useContext } from "react";
import styled from "styled-components";
import { SuggestContext } from "../../contexts/SuggestContext";

//images
import close from "../../assets/close.svg";
import thankyou from "../../assets/thankyou.svg";

const Wrapper = styled.dialog`
  background: rgba(18, 24, 41, 0.8);
  height: 432px;
  width: 560px;
  border: 1px solid #20283e;
  backdrop-filter: blur(20px);
  border-radius: 24px;
  top: calc(50% - 216px);
  left: calc(50% - 255px);
  z-index: 3;
  ::backdrop {
    background-color: black;
    opacity: 0.2;
  }
  .close {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(12px);
    position: absolute;
    height: 40px;
    width: 40px;
    top: 24px;
    right: 24px;
    border-radius: 8px;
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 24px;
    h1 {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.015em;
      color: #ebeef5;
    }
    p {
      width: 400px;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #767e94;
    }
  }
`;

const SuggestedDialog = () => {
  const { modalRef } = useContext(SuggestContext);
  return (
    <Wrapper ref={modalRef}>
      <div className="close" onClick={() => modalRef.current.close()}>
        <img src={close} alt="" />
      </div>
      <div className="content">
        <img src={thankyou} alt="" />
        <h1>Thank you for your suggestion</h1>
        <p>
          Your suggestion has been succesfully added to my watchlist, I will
          manage sometime to watch your suggestion. ❤️
        </p>
      </div>
    </Wrapper>
  );
};

export default SuggestedDialog;
