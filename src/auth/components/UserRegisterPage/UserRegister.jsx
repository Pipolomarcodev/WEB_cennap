import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import images from "../../../constants/images";
import "../../../assets/bulma.css";
import "./registerPage.css";

const UserRegister = () => {
  const { login } = useAuth();
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  window.scroll({
    top: 115,
    behavior: "smooth",
  });

  const validationSchema = Yup.object({
    name: Yup.string().required("Campo obligatorio"),
    lastname: Yup.string().required("Campo obligatorio"),
    email: Yup.string()
      .email("Ingrese un email valido")
      .required("Campo obligatorio")
      .test(
        "is-email-available",
        "Este correo electrónico ya está en uso.",
        async function (value) {
          if (this.parent) {
            // Llamar a la función isEmailAvailable solo al enviar el formulario
            const isAvailable = await isEmailAvailable(value);
            return isAvailable;
          }
          return true;
        }
      ),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("Campo obligatorio"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("Comfirme la contraseña"),
  });

  const isEmailAvailable = async (email) => {
    try {
      const response = await fetch(
        `http://localhost:8080/auth/check-email/${email}`
      );
      if (response.status === 200) {
        return true;
      } else if (response.status === 409) {
        return false;
      } else {
        console.error(`Error en la respuesta del servidor: ${response.status}`);
        return false;
      }
    } catch (error) {
      console.error(
        "Error al verificar la disponibilidad del correo electrónico:",
        error
      );
      return false;
    }
  };

  async function onSubmit(values, { resetForm }) {
    const userInfo = {
      name: formik.values.name,
      last_name: formik.values.lastname,
      email: formik.values.email,
      password: formik.values.password,
      roles: "ROLE_USER",
    };

    try {
      const response = await fetch("http://localhost:8080/auth/addNewUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      if (response.ok) {
        const userData = {
          email: formik.values.email,
          password: formik.values.password,
        };

        const tokenResponse = await fetch(
          "http://localhost:8080/auth/generateToken",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        if (tokenResponse.ok) {
          const { token } = await tokenResponse.json();

          login(token);
          setSubmitted(true);
        } else {
          console.error("Error al generar el token");
        }
      } else {
        console.error("Error al registrar usuario");
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <div className="register-container">
      <div className="form-container text-focus-in">
        <div className="form-title">
          <img src={images.logoForm} alt="logo-form" />
          <strong>¡Bienvenido!</strong>
        </div>
        <div className="form-separate">
          <div className="input-cont">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="input-styled input"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="register-error">{formik.errors.name}</p>
            )}
          </div>
          <div className="input-cont1">
            <input
              type="text"
              name="lastname"
              placeholder="Apellido"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastname}
              className="input-styled input"
            />
            {formik.touched.lastname && formik.errors.lastname && (
              <p className="register-error1">{formik.errors.lastname}</p>
            )}
          </div>
        </div>
        <div className="input-cont">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="input-styled input"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="register-error">{formik.errors.email}</p>
          )}
        </div>
        <div className="input-cont">
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="input-styled input"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="register-error">{formik.errors.password}</p>
          )}
        </div>
        <div className="input-cont">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar Contraseña"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className="input-styled input"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="register-error">{formik.errors.confirmPassword}</p>
          )}
        </div>
        <button
          type="submit"
          className={`btn-form button ${
            formik.isSubmitting ? "is-loading" : ""
          }`}
          onClick={formik.handleSubmit}
        >
          Crear cuenta
        </button>
        <Link to={"/auth/login"}>
          Ya tienes una cuenta? <strong>Iniciar Sesión</strong>
        </Link>
        <small>Copyrigth ©Cenapp 2023</small>{" "}
      </div>
    </div>
  );
};

export default UserRegister;
