import { useContext, useState } from "react";
import { icons } from "../../../constants";
import "./headerlogin.css";
import { UserContext } from "../../../context/UserContext";
import { Link } from "react-router-dom";
import { ReserveTrolley } from "../../../user/components/reserveTrolley/ReserveTrolley";

export const HeaderLogin = () => {
  const { logout } = useContext(UserContext);
  const [config, setConfig] = useState(false);
  const toggleNavConf = () => {
    setConfig(!config);
  };
  return (
    <div className="nav-login">
      <div className="perfil-login">
        <button className="button-login" onClick={toggleNavConf}>
          <img src={icons.Empty} alt="svg" />
        </button>
        <ReserveTrolley />
      </div>

      <div
        className={`nav-conf ${
          config ? "scale-in-ver-top" : "scale-out-ver-top"
        }`}
      >
        {config && (
          <>
            <h1>Hola Marco</h1>
            <Link className="clone-user" onClick={logout}>
              Cerrar sesión
            </Link>
            <Link to={"/user/user-panel"}>Mis Reservas</Link>
            <Link to={"/user/user-profile"}>Configuración</Link>
          </>
        )}
      </div>
    </div>
  );
};
