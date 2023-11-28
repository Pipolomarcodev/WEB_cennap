import { Formik, Form, Field, ErrorMessage } from "formik";
import "./registerPage.css";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import images from "../../../constants/images";
import { useState } from "react";
import { SubmittedForm } from "../../../ui/SubmittedCrud/SubmittedForm";

const initialValues = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Requerido!"),
  lastname: Yup.string().required("Requerido!"),
  email: Yup.string()
    .email("formato de email incorrecto")
    .required("Ingrese su email"),
  password: Yup.string()
    .min(7, "La contraseña debe tener al menos 8 caracteres")
    .required("Campo obligatorio"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Error validacion")
    .required("Comfirme el password"),
});

export const Register = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("http://localhost:8080/auth/addNewUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(response);
      resetForm();
  
      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {submitted ? (
        <SubmittedForm
          titulo={"Gracias por registrarte"}
          crud={"registro"}
          word={"usuario"}
        />
      ) : (
        <>
          <div className="register-container">
            <div className="form-container text-focus-in">
              <div className="form-title">
                <img src={images.logoForm} alt="logo-form" />
                <strong>¡Bienvenido!</strong>
              </div>
              <Form className="form-register">
                <div className="form-separate">
                  <div>
                    <Field type="text" name="name" placeholder="Nombre" />
                    <ErrorMessage className="form-error" name="name" />
                  </div>
                  <div>
                    <Field type="text" name="lastname" placeholder="Apellido" />
                    <ErrorMessage name="lastname" className="form-error" />
                  </div>
                </div>
                <Field type="email" name="email" placeholder="E-mail" />
                <ErrorMessage name="email" />
                <Field
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                />
                <ErrorMessage name="password" />
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirmar Contraseña"
                />
                <ErrorMessage name="confirmPassword" />
                <button type="submit" className="btn-form">
                  Crear cuenta
                </button>
              </Form>
              <Link to={"/auth/login"}>
                Ya Tienes una cuenta ? <strong>Iniciar Sesion</strong>
              </Link>
              <small>Compyrigth © cenapp 2023</small>{" "}
            </div>
          </div>
        </>
      )}
    </Formik>
  );
};
