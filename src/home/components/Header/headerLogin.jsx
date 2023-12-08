import { useContext, useState, useEffect } from "react";
import { icons } from "../../../constants";
import "./headerlogin.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export const HeaderLogin = () => {
  const [config, setConfig] = useState(false);
  const { user, logout, token, verifyUser } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const toggleNavConf = () => {
    setConfig(!config);
  };

  const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "");

  return (
    <div className="nav-login">
      <button className="button-login" onClick={toggleNavConf}>
        <h3>
          {user.name} {user.last_name}
        </h3>
        <div className="circle">
          <span>{getInitial(user.name)}</span>
          <span>{getInitial(user.last_name)}</span>
        </div>
      </button>

      <div
        className={`nav-conf ${
          config ? "scale-in-ver-top" : "scale-out-ver-top"
        }`}
      >
        {config && (
          <>
            <div>
              {user.roles == "ROLE_USER" ? (
                <Link to={"/user/user-panel"}>Mis Reservas</Link>
              ) : (
                <Link to={"/admin/admin-panel"}>Gestionar restaurantes</Link>
              )}
            </div>
            <div>
              <Link to={"/user/user-profile"}>Configuración</Link>
            </div>
            <div>
              <button onClick={handleLogout}>Cerrar Sesion</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
