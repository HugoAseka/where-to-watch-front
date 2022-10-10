import { useState } from "react";
import { Header, Logo, SearchBar } from "./HomeScreen/StyledHomeScreen";

export default function Top() {
  const [search, setSearch] = useState("");

  return (
    <Header>
      <Logo>
        <ion-icon name="play"></ion-icon>
        <h1>W.T.W.</h1>
      </Logo>
      <SearchBar
        placeholder="  Search for Movies or TV Shows"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ion-icon name="person"></ion-icon>
    </Header>
  );
}
