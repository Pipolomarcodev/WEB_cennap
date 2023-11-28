import "./main.css";
import "./home.css"
import "../../../assets/bulma.css";
import imagesCards from "../../../constants/images-cards";
import { images } from "../../../constants";

const Card = ({rating,name,category,location,image_url,reviews,liked}) => {

  const getStarImage = (rating) => {
    const starImages = {
      1: imagesCards.oneStar,
      2: imagesCards.twoStar,
      3: imagesCards.threeStar,
      4: imagesCards.fourStar,
      5: imagesCards.fiveStar
    };
  
    return starImages[rating] || defaultImage; // Puedes definir defaultImage según tus necesidades
  };
  return (
    <>
      <div className="card-m">
        <img src={image_url} alt="" /> 

        <div className="card__info">
          <a href="#" className="titles">
            {name}

          <a href="#" className="category">
            {category} 
          </a>
          </a>

          <span className="pages ">
           {location} 
          </span>
          <div>
            <img src={getStarImage(rating)} alt={`Rating: ${rating} stars`}className="star" />
            <span className="reviews">{`(${reviews} reviews)`}</span>
            <img src={liked ? imagesCards.likeOn : imagesCards.likeOff} alt=""  className="like-button"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
