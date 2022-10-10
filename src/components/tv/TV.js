import Top from "../Header";
import { Container } from "../homeScreen/StyledHomeScreen";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function TvPage() {
  const { id } = useParams();
  const baseUrl = "https://image.tmdb.org/t/p/";
  const [show, setShow] = useState([]);
  const [providers, setProviders] = useState([]);
  useEffect(() => {
    axios
      .get("https://where-to-watch-back.herokuapp.com/tv/" + id)
      .then((response) => {
        console.log(response.data);
        setShow(response.data.show);
        setProviders(response.data.providers.flatrate);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Top />

      {show.length !== 0 ? (
        <MovieBox>
          <img src={baseUrl + "w400" + show.poster_path} alt="poster" />

          <Details>
            <h2>{show.title}</h2>
            <span>{show.tagline}</span>
            <p>{show.overview}</p>
            <div>{Math.round(show.vote_average * 10)}%</div>
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
