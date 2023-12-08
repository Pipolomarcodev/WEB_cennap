import "./modal.css";
import ModalGalery from "./ModalGalery";
import { ModalInfo } from "./ModalInfo";
import ModalComment from "./ModalComment";
import { ModalText } from "./ModalText";
import { ModalCalendar } from "./ModalCalendar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useEffect } from "react";


export const Modal = ({ closeModal, restaurant }) => {
  const { setReserveDataGlobal, user } = useAuth();
  const navigate = useNavigate();



  const handleReserveClick = () => {
    if(user == null){
      navigate("/auth/login");
    }
    
    setReserveDataGlobal({
      restaurant,
    });
    navigate("/user/reserve");
  };

  return (
    <div className="modal-background modal-center   ">
      <p className="close-modal" onClick={closeModal}>
        x
      </p>
      <div className="container-grid scale-in-center">
        <div className="grid-img">
          <ModalGalery />
        </div>
        <div className="grid-date">
          <div className="flex-content">
            <ModalInfo
              restaurant={restaurant}
              category={restaurant.foodTypes
                .map((foodType) => foodType.name)
                .join(" | ")}
            />
          </div>
          <div className="flex-comment">
            <ModalComment restaurant={restaurant} />
          </div>
          <div className="text-service">
            <ModalText restaurant={restaurant} />
          </div>
          <div className="flex-calendar">
            <ModalCalendar restaurant={restaurant} />
          </div>
        </div>
        <div className="flex-button">
          <button onClick={handleReserveClick} className="btn-modal">
            Quiero mi reserva!
          </button>
        </div>
      </div>
    </div>
  );
};
