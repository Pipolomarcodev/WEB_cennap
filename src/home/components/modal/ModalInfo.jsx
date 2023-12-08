import { icons, images } from "../../../constants";

export const ModalInfo = ({ restaurant, category }) => {
  return (
    <>
      <img src={images.logo} alt="logo" />
      <div className="flex-info">
        <div className="flex-info-text">
          <h3>
            {restaurant.name} | {restaurant.phone}
          </h3>
        </div>
        <div className="modal-info">
          <h4>Tipo de comida: {category}</h4>
          <div className="modal-service">
            <h4>Servicios | </h4>
            <img src={icons.spaghetti} alt="" />
            <img src={icons.spaghetti} alt="" />
          </div>
        </div>
      </div>
      <div className="flex-content-start">
        <div className="rating">
          <input value="5" name="rate" id="star5" type="radio" />
          <label title="text" htmlFor="star5" />
          <input value="2" name="rate" id="star4" type="radio" />
          <label title="text" htmlFor="star4" />
          <input value="3" name="rate" id="star3" type="radio" />
          <label title="text" htmlFor="star3" />
          <input value="4" name="rate" id="star2" type="radio" />
          <label title="text" htmlFor="star2" />
          <input value="5" name="rate" id="star1" type="radio" />
          <label title="text" htmlFor="star1" />
          <p>5</p>
        </div>
        <div className="icons">
          <img src={icons.socialShare} alt="icon-social" />
          <img src={icons.heart} alt="icon-heart" />
        </div>
      </div>
    </>
  );
};
