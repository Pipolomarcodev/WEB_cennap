import { Link, useNavigate } from "react-router-dom";
import { icons } from "../../../constants";
import images from "../../../constants/images";
import "./header.css";
import { UserContext } from "../../../context/UserContext";
import { useContext } from "react";
import { HeaderLogin } from "./headerLogin";

export const Header = () => {
  const { isAuth } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <Link className="nav-logo">
        <img className="nav-logos" src={images.logoGrande} alt="logo" />
      </Link>
      <div className="nav-container">
        {isAuth ? (
          <HeaderLogin />
        ) : (
          <>
            <button
              onClick={() => navigate("/auth/register")}
              className="nav-btn-CA "
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
  );
};
