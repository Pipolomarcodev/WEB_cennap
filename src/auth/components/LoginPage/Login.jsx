import { Link } from "react-router-dom";
import "./loginPage.css";

export const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="form-container">
          <div className="form-title">
            <img src="/src/assets/images/logo-form.png" alt="logo-form" />
            <strong>¡Bienvenido!</strong>
          </div>
          <form className="form-login" action="">
            <input type="email" name="" placeholder="Correo Electronico" />
            <input type="password" name="" placeholder="Contraseña" />

            <button className="btn-form">Iniciar Sesion</button>
          </form>
          <div className="login">
            <a href="#">Olvide mi contraseña</a>
            <Link to={"/auth/register"}>
              No tienes un cuenta ? <strong>Crear cuenta</strong>
            </Link>
          </div>
          <div className="link-bottom">
            <Link to={"/"}>Volver Pagina Principal</Link>
            <small>Compyrigth © cenapp 2023</small>
          </div>
        </div>
      </div>
    </>
  );
};
