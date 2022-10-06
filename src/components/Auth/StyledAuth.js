import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
`;

export const Logo = styled.div`
  width: 40vw;
  height: inherit;
  background-color: purple;
  font-size: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: yellow;
  h1 {
    font-size: inherit;
  }
`;

export const InputContainer = styled.div`
  width: 60vw;
  height: inherit;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 40vw;
    height: 40px;
    border-radius: 4px;
    margin: 8px;
  }
  div {
    width: 40vw;
    height: 40px;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
  }
`;
