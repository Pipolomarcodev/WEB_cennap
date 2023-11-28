import { Link, useNavigate } from "react-router-dom";
import "./loginPage.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";

const validationSchema = Yup.object({
  username: Yup.string().required("Requerido"),
  password: Yup.string().required("Requerido"),
});

const iniciaValues = {
  username: "",
  password: "",
};

export const Login = () => {
  const { login } = useContext(UserContext);

  const [error, setError] = useState("");

  const onSubmit = async (values) => {
    try {
      console.log(values);
      await login(values);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Usuario no Encontrado";
      setError(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={iniciaValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="login-container">
        <div className="form-container text-focus-in">
          <div className="form-title">
            <img src="/src/assets/images/logo-form.png" alt="logo-form" />
            <strong>Bienvenido</strong>
          </div>
          <Form className="form-login">
            <Field type="text" name="username" placeholder="Username" />
            <ErrorMessage name="username" />
            <Field type="password" name="password" placeholder="Contraseña" />
            <ErrorMessage name="password" className="form-error" />
            <button type="submit" className="btn-form">
              Iniciar Sesion
            </button>
            <h1>{error}</h1>
          </Form>
          <div className="login">
            <Link>Olvide mi contraseña</Link>
            <Link to={"/auth/register"}>
              No tienes un cuenta ? <strong>Crear cuenta</strong>
            </Link>
          </div>
          <div className="link-bottom">
            <Link to={"/home/page"}>Volver Pagina Principal</Link>
            <small>Compyrigth © cenapp 2023</small>
          </div>
        </div>
      </div>
    </Formik>
  );
};
