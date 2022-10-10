import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Item({ el }) {
  console.log(el);
  const imageUrl = "https://image.tmdb.org/t/p/w154" + el.poster_path;
  const navigate = useNavigate();
  function goTo() {
    navigate(`/${el.media_type}/${el.id}`);
  }
  return (
    <Container>
      <img onClick={goTo} src={imageUrl} alt="poster" />
      <Box>
        <p>{el.original_title}</p>
        <span>{el.overview}</span>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  width: 80vw;
  height: 200px;
  display: flex;
  background-color: black;
  border-radius: 10px;
  color: #fafafa;
  padding: 10px;
  img {
    width: 154px;
    height: auto;
  }
`;

const Box = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding-top: 4px;
  margin-left: 20px;
  p {
    font-size: 30px;
  }
`;
