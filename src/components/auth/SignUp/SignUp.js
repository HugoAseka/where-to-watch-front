import { useState } from "react";
import { Container, Logo, InputContainer } from "../StyledAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  function SignUpRequest(body) {
    axios
      .post("http://localhost:5000/signup", body)
      .then((response) => {
        navigate("/signin");
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
          if (e.key === "Enter")
            SignUpRequest({ name, email, password, passwordConfirmation });
        }}
      >
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          placeholder="Confirm password"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <div
          onClick={() => {
            SignUpRequest({
              name,
              email,
              password,
              passwordConfirmation,
            });
          }}
        >
          Sign Up
        </div>
      </InputContainer>
    </Container>
  );
}
