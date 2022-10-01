import { useState } from "react";
import { Container, Header, Logo, SearchBar } from "./StyledHomeScreen";

export default function HomeScreen() {
  const [search, setSearch] = useState();
  return (
    <Container>
      <Header>
        <Logo>
          <ion-icon name="play"></ion-icon>
          <h1>W.T.W.</h1>
        </Logo>
        <SearchBar
          value={search}
          onKeyDown={(e) => setSearch(e.target.value)}
        />
      </Header>
    </Container>
  );
}
