// UserLogin.jsx
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../../context/AuthContext";
import "./loginPage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { images } from "../../../constants";

const initialValues = {
  email: "",
  password: "",
};

/*  .matches(
      /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})+$/,
      "Ingrese un email válido"
    ),*/

const validationSchema = Yup.object({
  email: Yup.string().required("Ingrese su email"),
  password: Yup.string()
    .required("La contraseña es requerida")
    .matches(/^[a-zA-Z0-9@]{1,25}$/, "La contraseña no es válida"),
});

const UserLogin = () => {
  const { login, user } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  window.scroll({
    top: 115,
    behavior: "smooth",
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const userInfo = {
        email: formik.values.email,
        password: formik.values.password,
      };

      try {
        const response = await fetch(
          "http://localhost:8080/auth/generateToken",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          }
        );

        if (response.ok) {
          const { token } = await response.json();

          login(token);
        } else {
          setError("Usuario no encontrado");
        }
      } catch (error) {
        console.error("Error al enviar la solicitud:", error);
        setError("Error al iniciar sesión");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="login-container-l">
      <div className="form-container-l text-focus-in">
        <div className="form-title-l">
          <img src={images.logoForm} alt="logo-form" />
          <strong>Bienvenido</strong>
        </div>

        <form onSubmit={formik.handleSubmit} className="form-login-l">
          <div className="input-cont-l">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="input input-styled "
            />
            {formik.touched.email && formik.errors.email && (
              <div className="login-error">{formik.errors.email}</div>
            )}
          </div>
          <div className="input-cont-l1">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="input input-styled "
            />
            {formik.touched.password && formik.errors.password && (
              <div className="login-error">{formik.errors.password}</div>
            )}
          </div>

          <button
            type="submit"
            className={`btn-form button ${
              formik.isSubmitting ? "is-loading" : ""
            }`}
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="login-l">
          <Link to={"/auth/register"}>
            ¿No tienes una cuenta? <strong>Crear cuenta</strong>
          </Link>
        </div>

        <div className="link-bottom-l">
          <Link to={"/home/page"}>Volver a la Página Principal</Link>
          <small>Compyrigth © cenapp 2023</small>
        </div>
        <h1>{error}</h1>
      </div>
    </div>
  );
};

export default UserLogin;
