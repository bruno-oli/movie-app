import { createGlobalStyle } from "styled-components";
import background from "../assets/background.png";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  body {
    background: url(${background}), #121829;
    background-position-y: -15vh;
    background-position-x: center;
    background-size: cover;
    background-repeat: repeat-y;
    ::-webkit-scrollbar {
      width: 8px;             
    }
    ::-webkit-scrollbar-track {
      background: rgba(18, 24, 41, 0.8);
      backdrop-filter: blur(20px);
    }
    ::-webkit-scrollbar-thumb {
      background-color: #273047;  
      border-radius: 20px;    
    }
  }
`;

export default GlobalStyle;
