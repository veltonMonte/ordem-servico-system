import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import Home from "./pages/home";
import Concluidos from "./pages/concluidos";
import Pendentes from "./pages/pendentes";
import { Login } from "./pages/login";
import { ProtectedRoute } from "./routes/ProtectdRoutes";
import { Perfil } from "./pages/perfil/perfil";


export default function App() {
  return (
    <BrowserRouter>
      <div className="navbar-container">
        <nav className="navbar-sidebar">
          <Navbar />
        </nav>

        <main className="navbar-content">
          <Routes>
            <Route path="/" element={<Login />} />

            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              path="/pendentes"
              element={
                <ProtectedRoute>
                  <Pendentes />
                </ProtectedRoute>
              }
            />

            <Route
              path="/concluidos"
              element={
                <ProtectedRoute>
                  <Concluidos />
                </ProtectedRoute>
              }
            />

          
            <Route
              path="/perfil"
              element={
                <ProtectedRoute>
                  <Perfil />
                </ProtectedRoute>
              }
            />
          </Routes>

          
        </main>
      </div>
    </BrowserRouter>
  );
}
