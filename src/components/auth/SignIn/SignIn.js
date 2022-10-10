import { useState } from "react";
import { Container, Logo, InputContainer } from "../StyledAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function SignInRequest(body) {
    axios
      .post("https://where-to-watch-back.herokuapp.com/signin", body)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("WTW_TOKEN", response.data);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.response.data.message;
        alert(errorMessage);
      });
  }
  return (
    <Container>
      <Logo>
        <ion-icon name="play"></ion-icon>
        <h1>W.T.W.</h1>
      </Logo>
      <InputContainer
        onKeyDown={(e) => {
          if (e.key === "Enter") SignInRequest({ email, password });
        }}
      >
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div onClick={() => SignInRequest({ email, password })}>Login</div>
      </InputContainer>
    </Container>
  );
}
