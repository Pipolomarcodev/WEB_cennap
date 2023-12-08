import { Link, useNavigate } from "react-router-dom";
import { icons } from "../../../constants";
import images from "../../../constants/images";
import "./header.css";
import { useAuth } from "../../../context/AuthContext";  // Importa useAuth
import { HeaderLogin } from "./headerLogin";
import { useScroll } from "./hooks/useScroll";
import { useEffect } from "react";

export const Header = () => {
  const { user, loading } = useAuth();
  const scrolled = useScroll();
  const navigate = useNavigate();


  return (
    <div className={`nav ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav">
        <Link className="nav-logo">
          <img className="nav-logos" src={images.logoGrande} alt="logo" />
        </Link>
        <div className="nav-container">
          { user ? (
            <HeaderLogin />
          ) : (
            <>
              <button
                onClick={() => navigate("/auth/register")}
                className="nav-btn-CA"
              >
                Crear Cuenta
              </button>
              <button
                onClick={() => navigate("/auth/login")}
                className="nav-btn-SI"
              >
                Iniciar sesión
              </button>
            </>
          )}
        </div>
        <div className="nav-burger">
          <img src={icons.Navigator} alt="icon-burger-nav" />
        </div>
      </nav>
    </div>
  );
};