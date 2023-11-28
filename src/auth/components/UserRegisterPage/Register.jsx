import { useState } from "react";
import "./registerPage.css";
import { SubmittedForm } from "../SubmittedForm/SubmittedForm";
import { Link } from "react-router-dom";

export const Register = () => {
  const [ok, setOk] = useState(true);

  return (
    <>
      <div className="register-container">
        <div className="form-container">
          {ok ? (
            <>
              <div className="form-title">
                <img src="/src/assets/images/logo-form.png" alt="logo-form" />
                <strong>¡Bienvenido!</strong>
              </div>
              <form className="form-register" action="">
                <div className="form-separate">
                  <input type="text" name="" placeholder="Nombre" />
                  <input type="text" name="" placeholder="Apellido" />
                </div>
                <input type="email" name="" placeholder="E-mail" />
                <input type="password" name="" placeholder="Contraseña" />
                <input
                  type="password"
                  name=""
                  placeholder="Confirmar Contraseña"
                />
                <button onClick={() => setOk(false)} className="btn-form">
                  Crear cuenta
                </button>
              </form>
              <Link to={"/auth/login"}>
                Ya Tienes una cuenta ? <strong>Iniciar Sesion</strong>
              </Link>
              <small>Compyrigth © cenapp 2023</small>{" "}
            </>
          ) : (
            <SubmittedForm />
          )}
        </div>
      </div>
    </>
  );
};
