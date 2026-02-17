import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginPost } from "../services/auth";
import axios from "axios";

export function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [ errorMessage, setErrorMessage ] = useState(""); 
  const [ showPassword, setShowPassword ] = useState(false);

  const navigate = useNavigate(); 

  const handleLogin = async () => {
  try {
    const response = await loginPost(login, password);

    localStorage.setItem("token", response.data.token);

    setErrorMessage("");
    navigate("/home");

  } catch (error) {

    if (axios.isAxiosError(error)) {

      const status = error.response?.status;
      const backendMessage = error.response?.data?.message;

      if (backendMessage) {
        setErrorMessage(backendMessage);
      } else if (status === 403 || status === 401) {
        setErrorMessage("Login ou senha incorretos.");
      } else {
        setErrorMessage("Erro ao tentar fazer login.");
      }

    } else {
      setErrorMessage("Erro inesperado.");
    }
  }
};


  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Usuário"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <img
            src={showPassword ? "/olhos-cruzados.png" : "/olho.png"}
            alt="Mostrar senha"
            onClick={() => setShowPassword(!showPassword)}
            className="toggle-password"
          />
        </div>


        {errorMessage && (
        <div className="login-error">
          <span className="error-icon">⚠</span>
          <span>{errorMessage}</span>
        </div>
      )}


        <button className="btn-primary" onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
} 
