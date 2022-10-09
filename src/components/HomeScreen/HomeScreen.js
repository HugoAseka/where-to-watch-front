import { useState } from "react";
import { Container, Header, List, Logo, SearchBar } from "./StyledHomeScreen";
import TrendingShows from "./pages/TrendingShows";
import App from "./pages/horizontalScroll/index";
import TrendingMovies from "./pages/TrendingMovies";

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
          placeholder="  Search for Movies or TV Shows"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ion-icon name="person"></ion-icon>
      </Header>

      <List>
        <TrendingShows />
        <TrendingMovies />
      </List>
    </Container>
  );
}
