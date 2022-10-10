import { Container, List } from "./StyledHomeScreen";
import TrendingShows from "./pages/TrendingShows";
import TrendingMovies from "./pages/TrendingMovies";
import InTheaters from "./pages/InTheaters";
import Top from "../Header";

export default function HomeScreen() {
  return (
    <Container>
      <Top />
      <List>
        <InTheaters />
        <TrendingShows />
        <TrendingMovies />
      </List>
    </Container>
  );
}
