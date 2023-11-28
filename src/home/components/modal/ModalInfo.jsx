import React from "react";

export const ModalInfo = () => {
  return (
    <>
      <div className="flex-content">
        <div className="flex-data">
          <img src="/src/components/modal/img/socialShare.svg" alt="" />
          <img src="/src/components/modal/img/heart.svg" alt="" />
          <img src="/src/components/modal/img/logo.png" alt="logo" />
          <div class="rating">
            <input value="5" name="rate" id="star5" type="radio" />
            <label title="text" for="star5" />
            <input value="4" name="rate" id="star4" type="radio" />
            <label title="text" for="star4" />
            <input value="3" name="rate" id="star3" type="radio" checked="" />
            <label title="text" for="star3" />
            <input value="2" name="rate" id="star2" type="radio" />
            <label title="text" for="star2" />
            <input value="1" name="rate" id="star1" type="radio" />
            <label title="text" for="star1" />
          </div>
        </div>
        <p>Uruguay | Barrio Viejo, Montevideo</p>
      </div>
      <div className="flex-data">
        <h3>El Tio Bistro |</h3>
        <img src="/src/components/modal/img/meat 1.png" alt="" />
        <img src="/src/components/modal/img/spaghetti 1.png" alt="" />
        <h4>Carnes , pastas</h4>
      </div>

      <div className="flex-service">
        <h4>Servicios |</h4>
        <img src="/src/components/modal/img/musical-note 1.png" alt="" />
        <img src="/src/components/modal/img/parked-car 1.png" alt="" />
      </div>
    </>
  );
};
