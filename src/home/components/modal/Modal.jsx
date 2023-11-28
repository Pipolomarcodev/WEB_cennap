import React from "react";
import "./modal.css";
import ModalGalery from "./ModalGalery";
import { ModalInfo } from "./ModalInfo";
import ModalComment from "./ModalComment";
import { ModalText } from "./ModalText";
import { ModalCalendar } from "./ModalCalendar";

export const Modal = ({ closeModal, restaurant }) => {
  return (
    <div className="modal-background modal-center ">
      <button onClick={closeModal}>x</button>
      <div className="container-grid">
        <div className="grid-img">
          <ModalGalery />
        </div>
        <div className="grid-date">
          <div className="flex-content">
            <ModalInfo restaurant={restaurant} />
          </div>
          <div className="flex-comment">
            <ModalComment />
          </div>
          <div className="text-service">
            <ModalText />
          </div>
          <div className="flex-calendar">
            <ModalCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};
