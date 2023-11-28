import { icons } from "../../../constants";
import "./headerlogin.css";

export const headerLogin = () => {
  return (
    <div className="nav-login">
      <h3>Usuario</h3>
      <button className="button-login" href="">
        <img src={icons.Empty} alt="svg" />
      </button>
      <div className="nav-conf">
        <a href="">
          Cerrar <script src=""></script>sesión
        </a>
        <a href="">Configuracion</a>
        <a href="">Ayuda</a>
      </div>
    </div>
  );
};
