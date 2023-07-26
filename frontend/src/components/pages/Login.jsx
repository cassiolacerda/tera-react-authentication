import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";

import AppLoading from "../organisms/AppLoading";
import { Alert } from "@mui/material";
import { saveToken } from "../../helpers/Auth";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [showError, setShowError] = React.useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    setIsLoading(true);

    fetch(`http://localhost:4000/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then(({ token }) => {
        saveToken(token);
        navigate("/users");
      })
      .catch(() => {
        setEmail("");
        setPassword("");
        setShowError(true);
        setIsLoading(false);
      });
  };

  const handleInputFocus = () => {
    setShowError(false);
  };

  return isLoading ? (
    <AppLoading />
  ) : (
    <div className="login center">
      <div className="login__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <form onSubmit={handleLogin} className="login__form">
        <div className="login__form-email">
          <label htmlFor="email">Usuário</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="login__form-password">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onFocus={handleInputFocus}
          />
        </div>
        {showError && <Alert severity="error">Credenciais com erro!</Alert>}
        <button className="button-primary button-full">Entrar</button>
      </form>
    </div>
  );
}
