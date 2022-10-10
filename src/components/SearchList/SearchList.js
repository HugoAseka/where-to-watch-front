import Top from "../Header";
import { Container } from "../HomeScreen/StyledHomeScreen";
import styled from "styled-components";
import axios from "axios";

export default function SearchPage() {
  

  return (
    <Container>
      <Top />
      <SearchList>

      </SearchList>
    </Container>
  );
}


const SearchList = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: purple;
    display: flex;
    flex-direction:column;
    align-items:center;
    margin-top: 100px;
`