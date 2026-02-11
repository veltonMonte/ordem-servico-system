import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {

  return (
    <>
      <span className="fs-4">Renovadora</span>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        
        <li className="nav-item">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : "link-dark"}`
            }
          >
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/pendentes"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : "link-dark"}`
            }
          >
            Pendentes
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/concluidos"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : "link-dark"}`
            }
          >
            Concluídos
          </NavLink>
        </li>
      </ul>

      <hr />
      <div className="dropdown">
        <NavLink to="/perfil" className="nav-link link-dark">

              <img
                src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                alt="user"
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>Administrador</strong>
          </NavLink>
      </div>
    </>
  );
}
