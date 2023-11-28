import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "../../../assets/bulma.css";
import "./home.css";
import { images } from "../../../constants";
import { useEffect } from "react";
import { UserContext } from "../../../context/UserContext";
import { Modal } from "../modal/Modal";

const Home = ({ page }) => {
  const [restaurant, setRestaurant] = useState([]);
  const [currentPage, setCurrentPage] = useState(page);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const { handlerAddProductCart } = useContext(UserContext);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (product) => {
    handlerAddProductCart(product);
  };

  const handleCardClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    openModal();
    console.log(selectedRestaurant);
  };

  useEffect(() => {
    fetch("http://localhost:8080/v1/api/restaurants")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setRestaurant(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // console.log(restaurant);
  }, [restaurant]);

  const cardsPerPage = 10;
  const totalPages = Math.ceil(restaurant.length / cardsPerPage);
  const displayRange = 1;

  const pagesToShow = [];
  for (
    let i = Math.max(1, currentPage - displayRange);
    i <= Math.min(totalPages, currentPage + displayRange);
    i++
  ) {
    pagesToShow.push(i);
  }

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <div className="cards-container">
        <div className="flex-restaurant">
          <h1 className="mostSearched">Los mas buscados</h1>
          <div className="grid-card">
            {restaurant
              .slice(
                (currentPage - 1) * cardsPerPage,
                currentPage * cardsPerPage
              )
              .map((restaurant, index) => (
                <Card
                  key={index}
                  id={restaurant.id_restaurant}
                  name={restaurant.name}
                  rating={restaurant.rating}
                  location={restaurant.address}
                  image_url={images.logoElTioBistro}
                  reviews={"275"}
                  liked={true}
                  category={restaurant.category.name}
                  handleAddToCart={() => handleAddToCart(restaurant)}
                  openModal={() => handleCardClick(restaurant)}
                />
              ))}
          </div>
        </div>
        {isModalOpen && (
          <Modal
            restaurant={selectedRestaurant}
            closeModal={() => closeModal()}
          />
        )}
        <nav
          className="pagination is-centered"
          role="navigation"
          aria-label="pagination"
        >
          <Link
            to={`/home/${currentPage - 1}`}
            className={`pagination-previous ${
              currentPage === 1 ? "is-disabled" : ""
            }`}
            onClick={prevPage}
          >
            {"<"}
          </Link>
          <ul className="pagination-list">
            {currentPage - displayRange > 1 && (
              <>
                <li>
                  <Link
                    to={`/home/1`}
                    className={`pagination-link`}
                    aria-label={`Goto page 1`}
                    onClick={() => setCurrentPage(1)}
                  >
                    1
                  </Link>
                </li>
                {currentPage - displayRange > 2 && (
                  <li>
                    <span className="pagination-ellipsis">&hellip;</span>
                  </li>
                )}
              </>
            )}
            {pagesToShow.map((pageNumber) => (
              <li key={pageNumber}>
                <Link
                  to={`/home/${pageNumber}`}
                  className={`pagination-link ${
                    currentPage === pageNumber ? "is-current" : ""
                  }`}
                  aria-label={`Goto page ${pageNumber}`}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </Link>
              </li>
            ))}
            {currentPage + displayRange < totalPages && (
              <>
                {currentPage + displayRange < totalPages - 1 && (
                  <li>
                    <span className="pagination-ellipsis">&hellip;</span>
                  </li>
                )}
                <li>
                  <Link
                    to={`/home/${totalPages}`}
                    className={`pagination-link`}
                    aria-label={`Goto page ${totalPages}`}
                    onClick={() => setCurrentPage(totalPages)}
                  >
                    {totalPages}
                  </Link>
                </li>
              </>
            )}
          </ul>
          <Link
            to={`/home/${currentPage + 1}`}
            className={`pagination-next ${
              currentPage === totalPages ? "is-disabled" : ""
            }`}
            onClick={nextPage}
          >
            {">"}
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Home;
