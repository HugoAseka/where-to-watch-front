import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "./ColumnStyle";
import HorizontalList from "./horizontalScroll";

export default function TrendingShows() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/trendingShows")
      .then((response) => {
        setList(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <p>Trending TV Shows</p>
      <HorizontalList list={list} />
    </Container>
  );
}
