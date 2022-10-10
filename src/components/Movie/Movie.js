import Top from "../Header";
import { Container } from "../HomeScreen/StyledHomeScreen";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function MoviePage() {
  const { id } = useParams();
  const baseUrl = "https://image.tmdb.org/t/p/";
  const [movie, setMovie] = useState([]);
  const [providers, setProviders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/movie/" + id)
      .then((response) => {
        console.log(response.data);
        setMovie(response.data.movie);
        setProviders(response.data.providers.flatrate);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Top />

      {movie.length !== 0 ? (
        <MovieBox>
          <img src={baseUrl + "w400" + movie.poster_path} alt="poster" />

          <Details>
            <h2>{movie.title}</h2>
            <span>{movie.tagline}</span>
            <p>{movie.overview}</p>
            <div>{Math.round(movie.vote_average * 10)}%</div>
            Streaming on:
            {providers.lengh !== 0 ? ( 
              <Providers>
                {providers.map((p) => (
                  <img src={baseUrl + "w92" + p.logo_path} />
                ))}
              </Providers>
            ) : (
              ""
            )}
          </Details>
        </MovieBox>
      ) : (
        ""
      )}
    </Container>
  );
}

const MovieBox = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  img {
    height: 60vh;
    width: auto;
  }
  @media (max-width: 612px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fafafa;
  width: 66vw;
  padding: 0 20px;
  box-sizing: border-box;
  @media (max-width: 612px) {
    padding: 0;
  }
`;

const Providers = styled.div`
  img {
    height: 92px;
    width: auto;
  }
`;
