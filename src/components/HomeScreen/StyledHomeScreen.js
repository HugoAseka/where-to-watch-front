import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;
export const Header = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 10px;
  > ion-icon {
    font-size: 30px;
    color: lightgray;
    :hover {
      cursor: pointer;
      color: gray;
    }
  }
`;
export const Logo = styled.div`
  width: 20vw;
  height: inherit;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: yellow;
  h1 {
    font-size: inherit;
  }
  :hover {
    color: rgb(202, 188, 42);
    cursor: pointer;
  }
`;

export const SearchBar = styled.input`
  width: 60vw;
  height: 40px;
`;



export const List = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: red;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:100px;
`;
