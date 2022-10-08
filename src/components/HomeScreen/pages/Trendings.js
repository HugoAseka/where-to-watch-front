import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "./ColumnStyle";
import HorizontalList from "./horizontalScroll";

export default function TrendingsList() {
  const [list, setList] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/";
  useEffect(() => {
    axios
      .get("http://localhost:5000/trendings")
      .then((response) => {
        setList(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <p>Trendings</p>
      <HorizontalList list={list} />
    </Container>
  );
}
