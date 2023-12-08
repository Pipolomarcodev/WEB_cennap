import React from "react";
import "./reserve.css";
import { images } from "../../../constants";
import iconsReserve from "../../../constants/icons-reserve";
import { useNavigate } from "react-router-dom";
export const ReserveDetail = () => {
  const navigate = useNavigate();

  return (
    <div
      className="container-reserve"
      style={{ backgroundImage: `url(${images.backgroundAuth})` }}
    >
      <div className="reserve">
        <h1 className="reserve-text">Esta a un Paso de tu reserva !</h1>
        <p className="reserve-subtext">
          Por favor, verifica los datos ingresados antes de confirmar:
        </p>
        <div className="data-user">
          <h2>
            Datos del usuario: <img src={iconsReserve.profile} alt="" />
          </h2>
          <p>
            <img src={iconsReserve.card} alt="card" />
            Johnny Tolengo
          </p>
          <p>
            <img src={iconsReserve.phone} alt="phone" />
            095259042
          </p>
          <p>
            {" "}
            <img src={iconsReserve.mail} alt="mail" />
            eljonnytolen99@gmail.com
          </p>
        </div>
        <div className="data-reserve">
          <h2>
            Datos de la reserva: <img src={iconsReserve.reservation} alt="" />
          </h2>
          <p>
            {" "}
            <img src={iconsReserve.calendar} alt="calendar" />
            16/11/23
          </p>
          <p>
            {" "}
            <img src={iconsReserve.meeting} alt="meeting" />5 personas
          </p>
          <p>
            <img src={iconsReserve.placeholder} alt="meeting" />
            Peatonal Sarandí 579
          </p>
        </div>
        <div className="contenedor-btn">
          <button
            onClick={() => navigate("/")}
            className="btn-reserve color-green"
          >
            Cancelar
          </button>
          <button className="btn-reserve color-gold">Confirmar</button>
        </div>
      </div>
    </div>
  );
};
