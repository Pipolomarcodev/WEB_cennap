import "./main.css";
import "./home.css";
import "../../../assets/bulma.css";
import imagesCards from "../../../constants/images-cards";

import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "../modal/Modal";

const Card = ({
  rating,
  name,
  category,
  location,
  image_url,
  reviews,
  liked,
  handleAddToCart,
  openModal,
}) => {
  const getStarImage = (rating) => {
    const starImages = {
      1: imagesCards.oneStar,
      2: imagesCards.twoStar,
      3: imagesCards.threeStar,
      4.5: imagesCards.fourStar,
      5: imagesCards.fiveStar,
    };

    return starImages[rating] || "defaultImage";
  };

  return (
    <>
      <div className="card-m">
        <img src={image_url} alt="" />

        <div className="card__info">
          <Link className="titles">
            {name}

            <Link href="#" className="category">
              {category}
            </Link>
          </Link>

          <span className="pages ">{location}</span>
          <div>
            <img
              src={getStarImage(rating)}
              alt={`Rating: ${rating} stars`}
              className="star"
            />
            <span className="reviews">{`(${reviews} reviews)`}</span>
            <img
              src={liked ? imagesCards.likeOn : imagesCards.likeOff}
              alt=""
              className="like-button"
            />
            <button onClick={() => handleAddToCart()}>agregar</button>
            <button onClick={() => openModal()}>Abrir</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
