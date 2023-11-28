import { useRef } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
export const Profile = () => {
  const fileInputRef = useRef();
  const navigate = useNavigate();

  return (
    <div className="container-flex background">
      <h1>Usuario</h1>
      <form action="" className="form-flex">
        <div className="form-user">
          <div className="form-img">
            <img src="/src/assets/icons/EmptyState.svg" alt="icon-perfil" />
            <input
              type="file"
              multiple
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            <p
              className="form-files"
              onClick={() => fileInputRef.current.click()}
            >
              <img src="/src/assets/icons/Action.svg" alt="" />
              Cargar Imagen
            </p>
            <p className="form-active">Activo</p>
          </div>
          <div className="form-name">
            <h2>Nombre</h2>
            <input type="text" placeholder="Nombre" />
            <h2>Apellido</h2>
            <input type="text" placeholder="Apellido" />
          </div>
        </div>
        <div className="form-data">
          <h2>Correo Electronico </h2>
          <input type="text" placeholder="Email" />
          <h2>Ciudad</h2>
          <input type="text" placeholder="Ciudad" />
        </div>
        <div className="form-submited">
          <button
            onClick={() => navigate("/home/:page")}
            className="btn-cancel"
          >
            Cancelar
          </button>
          <button className="btn-confirm">Confirmar</button>
        </div>
        <button className="btn-delete">
          <img src="/src/assets/icons/Trash.svg" alt="" />
          Eliminar mi cuenta
        </button>
      </form>
    </div>
  );
};
