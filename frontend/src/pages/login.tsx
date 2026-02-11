import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginPost } from "../services/auth";

export function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      const response = await loginPost(login, password);

      // salva o token
      localStorage.setItem("token", response.data.token);

      // navega corretamente
      navigate("/home");

    } catch (error) {
      console.error("Erro no login:", error);
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

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-primary" onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}
