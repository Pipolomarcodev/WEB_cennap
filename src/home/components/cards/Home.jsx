import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "../../../assets/bulma.css";
import "./home.css";
import { images } from "../../../constants";


const Home = ({ page }) => {
  const restaurantes = Array.from({ length: 1000 }, (_, index) => ({
    name: "Tio Bistro",
    category: "colombiana",
    location: "Uruguay | Barrio Ciudad Vieja, Montevideo",
    image_url: images.logoElTioBistro,
    rating: "5",
    liked: true,
    reviews: "432"
  }));

  const cardsPerPage = 10;
  const totalPages = Math.ceil(restaurantes.length / cardsPerPage);
  const displayRange = 1;

  const [currentPage, setCurrentPage] = useState(page);

  const pagesToShow = [];
  for (let i = Math.max(1, currentPage - displayRange); i <= Math.min(totalPages, currentPage + displayRange); i++) {
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
          <div className="grid-card">
            {restaurantes.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage).map((restaurante, index) => (
              <Card key={index} {...restaurante} />
            ))}
          </div>
        </div>
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
          <Link
            to={`/home/${currentPage - 1}`}
            className={`pagination-previous ${currentPage === 1 ? "is-disabled" : ""}`}
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
                {currentPage - displayRange > 2 && <li><span className="pagination-ellipsis">&hellip;</span></li>}
              </>
            )}
            {pagesToShow.map((pageNumber) => (
              <li key={pageNumber}>
                <Link
                  to={`/home/${pageNumber}`}
                  className={`pagination-link ${currentPage === pageNumber ? "is-current" : ""}`}
                  aria-label={`Goto page ${pageNumber}`}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </Link>
              </li>
            ))}
            {currentPage + displayRange < totalPages && (
              <>
                {currentPage + displayRange < totalPages - 1 && <li><span className="pagination-ellipsis">&hellip;</span></li>}
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
            className={`pagination-next ${currentPage === totalPages ? "is-disabled" : ""}`}
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