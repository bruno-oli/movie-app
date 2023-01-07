import styled from "styled-components";

const Input = styled.input`
  margin-top: 24px;
  background: rgba(0, 0, 0, 0.1);
  width: 344px;
  height: 64px;
  border: 1px solid #323b54;
  border-radius: 12px;
  padding: 12px 16px;
  outline: none;
  color: #767e94;
  position: relative;
  font-size: 14px;
  &:focus {
    border-color: #5b4af4;
  }
  &::placeholder {
    font-weight: 600;
    color: #323b54;
  }
`;

export default Input;
