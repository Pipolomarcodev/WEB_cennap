import "./main.css";
import "./home.css";
import "../../../assets/bulma.css";
import imagesCards from "../../../constants/images-cards";
import { icons } from "../../../constants";

import { useItemsCart } from "../../../hooks/useItemsCart";
import { Link } from "react-router-dom";

const Card = ({
  rating,
  name,
  category,
  location,
  image_url,
  openModal,
  id,
}) => {
  const { handlerAddFav } = useItemsCart();

  const generarNumeroAleatorio = () => Math.floor(Math.random() * 535) + 232;
  const getStarImage = (rating) => {
    const starImages = {
      1.0: imagesCards.oneStar,
      2.0: imagesCards.twoStar,
      3.0: imagesCards.threeStar,
      4.0: imagesCards.fourStar,
      5.0: imagesCards.fiveStar,
    };

    return starImages[rating] || "defaultImage";
  };

  return (
    <>
      <div className="card-m">
        <img
          className="img-grid"
          src={image_url}
          alt="img-grid"
          onClick={() => openModal()}
        />

        <div className="card__info">
          <Link href="#" className="titles" onClick={() => openModal()}>
            {name}
          </Link>

          <div href="#" className="category">
            <p>{category}</p>
          </div>

          <span className="pages ">{location}</span>
          <div>
            <img
              src={getStarImage(rating)}
              alt={`Rating: ${rating} stars`}
              className="star"
            />
            <span className="reviews">{`(${generarNumeroAleatorio()} reviews)`}</span>
            <img
              src={icons.heart}
              alt="icon-heart"
              className="like-button"
              onClick={() => handlerAddFav(id)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
