import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "./ColumnStyle";
import HorizontalList from "./horizontalScroll";

export default function TrendingMovies() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/trendingMovies")
      .then((response) => {
        setList(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <p>Trending Movies</p>
      <HorizontalList list={list} />
    </Container>
  );
}
