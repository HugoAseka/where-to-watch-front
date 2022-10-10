import Top from "../Header";
import { Container } from "../homeScreen/StyledHomeScreen";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "./Item";

export default function SearchPage() {
  const { query } = useParams();
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log(query);
    axios
      .get("http://localhost:5000/search?query=" + query)
      .then((response) => {
        console.log(response.data.results);
        if (response.data.results) {
          setList([...response.data.results]);
        }
      })
      .catch((error) => console.log(error));
  }, [query]);
  return (
    <Container>
      <Top />
      <SearchList>
        {list.length === 0
          ? "No items found"
          : list.map((el) => {
              return <Item el={el} />;
            })}
      </SearchList>
    </Container>
  );
}

const SearchList = styled.div`
  width: 100vw;
  min-height: 100vh;

  background-color:#fafafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 20px;
`;
