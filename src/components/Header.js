import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
export default function Top() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const search = () => {
    navigate("/search/" + searchInput);
  };

  return (
    <Header
      onKeyDown={(e) => {
        if (e.key === "Enter") search();
      }}
    >
      <Logo onClick={() => navigate("/")}>
        <ion-icon name="play"></ion-icon>
        <h1>W.T.W.</h1>
      </Logo>
      <SearchBar
        placeholder="  Search for Movies or TV Shows"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <ion-icon name="person"></ion-icon>
    </Header>
  );
}

const Header = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: black;
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
  @media (max-width: 612px) {
    > ion-icon {
      font-size: 20px;
    }
  }
`;

const Logo = styled.div`
  width: 20vw;
  height: auto;
  font-size: 2 rem;
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

const SearchBar = styled.input`
  width: 60vw;
  height: 40px;
  @media (max-width: 612px) {
    width: 50vw;
    height: 30px;
  }
`;
