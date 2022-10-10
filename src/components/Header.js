import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Logo, SearchBar } from "./HomeScreen/StyledHomeScreen";

export default function Top() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const search = () => {
    navigate("/search/" + searchInput);
  };
 
  return (
    <Header
        onKeyDown={(e) => {
            if(e.key === "Enter") search();
        }}>
      <Logo>
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
