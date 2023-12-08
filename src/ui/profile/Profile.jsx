import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Profile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();


  useEffect(() => {
  if(user == null){
      console.log("null");
      navigate("/home/:page")
  }else{
    console.log("bien bied");
  }
}, [])

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido"),
    lastName: Yup.string().required("El apellido es requerido"),
    city: Yup.string().required("La ciudad es requerida"),
  });

  const formik = useFormik({
    initialValues: {
      name: user.name,
      lastName: user.last_name,
      email: user.email,
      city: "", // Agrega el valor inicial para la ciudad si es necesario
    },
    validationSchema,
    onSubmit: (values) => {
      navigate("/home/:page")
    },
  });

  return (
    <div className="container-flex background">
      <h1>Usuario</h1>
      <form onSubmit={formik.handleSubmit} className="form-flex">
        <div className="form-user">
          <div className="form-img">
            <div className="circle-cont">
              <div className="circle-p">
                <span>{user.name ? user.name[0].toUpperCase() : ""}</span>
                <span>{user.last_name ? user.last_name[0].toUpperCase() : ""}</span>
              </div>
            </div>
            <input
              type="file"
              multiple
              style={{ display: "none" }}
              disabled
            />
            <p className="form-files" disabled>

              Cargar Imagen
            </p>
            <p className="form-active">Activo</p>
          </div>
          <div className="form-name">
            <div>
              <h2>Nombre</h2>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="input"
              />
              {formik.touched.name && formik.errors.name && (
                <div className="error-message">{formik.errors.name}</div>
              )}
            </div>
            <div>
              <h2>Apellido</h2>
              <input
                type="text"
                name="lastName"
                placeholder="Apellido"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className="input"
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className="error-message">{formik.errors.lastName}</div>
              )}
            </div>
          </div>
        </div>
        <div className="form-data">
          <h2>Correo Electronico </h2>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={user.email}
            className="Disabled input"
            disabled
          />
          <h2>Ciudad</h2>
          <div className="select profile-select is-dark">
            <select
              name="city"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            >
              <option value="" disabled>
                Seleccionar
              </option>
              <option value="Opcion1">Opcion 1</option>
              <option value="Opcion2">Opcion 2</option>
            </select>
          {formik.touched.city && formik.errors.city && (
            <div className="error-message">{formik.errors.city}</div>
          )}
          </div>
        </div>
        <div className="form-submited">
          <button
            onClick={() => {user.roles == "ROLE_USER" ? navigate("/home/:page") : navigate("/admin/admin-panel")}}
            className="btn-cancel"
          >
            Cancelar
          </button>
          <button type="submit" className="btn-confirm">
            Confirmar
          </button>
        </div>
        <button className="btn-delete">
          <img src="/src/assets/icons/Trash.svg" alt="" />
          Eliminar mi cuenta
        </button>
      </form>
    </div>
  );
};

