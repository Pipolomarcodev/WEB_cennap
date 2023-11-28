import { Link } from "react-router-dom";
import { icons } from "../../../constants";
import images from "../../../constants/images";
import "./header.css";

export const Header = () => {
  
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img className="nav-logos" src={images.logoGrande} alt="logo" />
      </div>
      <div className="nav-container">
        <button className="nav-btn-CA">
          <Link to={"/auth/register"} className="txt-btn-cont">
            Crear Cuenta
          </Link>
        </button>
        <button className="nav-btn-SI">
          <Link to={"/auth/login"} className="txt-btn-cont" href="#">
            Iniciar sesión
          </Link>
        </button>
      </div>
      <div className="nav-burger">
        <img src={icons.Navigator} alt="icon-burger-nav" />
      </div>
    </nav>
  );
};
