import React, { useEffect } from "react";
import "./reserve.css";
import "./calendar.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

import { images } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export const Reserve = () => {
  const navigate = useNavigate();
  const { reserveData } = useAuth();

  useEffect(() => {
    reserveData;
  }, [reserveData]);

  const initialValues = {
    startDate: new Date(),
    hora: "",
    cantidad: "",
  };
  const { id_restaurant, name, restaurant_tables } = reserveData.restaurant;
  const validationSchema = Yup.object({
    startDate: Yup.date().required("Selecciona una fecha"),
    hora: Yup.string().required("Seleccione la hora de la reserva"),
    cantidad: Yup.string().required("Seleccione la cantidad de mesas/personas"),
  });

  const horasOptions = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  const cantidadOptions = [
    "1 mesa / persona",
    "2 mesas / personas",
    "3 mesas / personas",
  ];

  const onSubmit = (values) => {
    console.log(formik.values);
    console.log(user);
    const userDataString = localStorage.getItem("user");
    const userData = JSON.parse(userDataString);
    const userId = userData.id;
    const info = {
      arrival_time: `${formik.values.hora}:00`,
      check_in_date: "2025-02-17",
      checkout_date: "2025-02-24",
      comments: "llevaré mascota",
      restaurantId: id_restaurant,
      user: userId,
    };

    fetch("http://localhost:8080/v1/api/reservations/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));

    navigate("/home/1");
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <div
        className="container-reserve"
        style={{ backgroundImage: `url(${images.backgroundAuth})` }}
      >
        <div className="reserve">
          <h1>{name}</h1>
          <p>Datos de la reserva</p>
          <form className="form-reserve" onSubmit={formik.handleSubmit}>
            <DatePicker
              selected={formik.values.startDate}
              onChange={(date) => formik.setFieldValue("startDate", date)}
              inline
              className="custom-datepicker"
            />
            <select
              className="select-form"
              name="hora"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.hora}
            >
              <option
                className="select-optional"
                value=""
                label="Seleccione la hora"
              />
              {horasOptions.map((hora, index) => (
                <option
                  className="optional"
                  key={index}
                  value={hora}
                  label={hora}
                />
              ))}
            </select>

            <select
              className="select-form"
              name="cantidad"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cantidad}
            >
              <option value="" label="Seleccione la cantidad" />
              {restaurant_tables.map((mesa, index) => (
                <option
                  className="optional"
                  key={index}
                  value={`${mesa.table_capacity} para ${mesa.table_type}`} // Ajusta esto según la estructura real de tus datos
                  label={`${mesa.table_capacity} en ${mesa.table_type}`} // Ajusta esto según la estructura real de tus datos
                />
              ))}
            </select>

            <button type="submit" className="btn-reserve is-loading">
              Confirmar Reserva
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Reserve;
