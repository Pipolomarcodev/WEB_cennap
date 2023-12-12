import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "./Card";
import "../../../assets/bulma.css";
import "./home.css";
import { images } from "../../../constants";
import { Modal } from "../modal/Modal";
import { useAuth } from "../../../context/AuthContext";
import { useItemsCart } from "../../../hooks/useItemsCart";
import BaseUrl from "../../../constants/BaseUrl";

const Home = ({ page }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(page);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const navigate = useNavigate();
  const { handlerAddProductCart } = useItemsCart();
  const { user, token } = useAuth();

  const imagesModal = [
    {
      img: images.cafe,
    },
    {
      img: images.cafe,
    },
    {
      img: images.logoElTioBistro,
    },
    {
      img: images.cafe,
    },
    {
      img: images.cafe,
    },
  ];

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
    // Redirige a la página 1 si la página solicitada es menor que 1
    if (currentPage < 1) {
      navigate("/home/1");
      window.location.reload();
      return;
    }

    fetchRestaurants();
    window.scrollTo(0, 0);
  }, [currentPage]);

  const fetchRestaurants = () => {
    const backendPage = currentPage - 1;
    const url = `${BaseUrl}/v1/api/restaurants/pages?page=${backendPage}&size=10&sort=name,asc`;

    setLoading(true);

    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setRestaurants(data.content);
        setTotalPages(data.totalPages);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handlePageChange = (newPage) => {
    setLoading(true);
    setCurrentPage(newPage);
    navigate(`/home/${newPage}`);
  };

  const getFood = () => {
    return restaurants.map((rest, index) => {
      const categoryArray = rest.foodTypes.map((foodType) => foodType.name);
      const categoryString = categoryArray.join("-");

      return {
        ...rest,
        categoryString: categoryString,
      };
    });
  };

  return (
    <>
      <div className="cards-container">
        <div className="flex-restaurant">
          {!loading && <h1 className="mostSearched">Los mas buscados</h1>}
          <div className="first-l">
            {loading && <div className="lds-dual-ring"></div>}
          </div>
          <div className="grid-card">
            {!loading &&
              restaurants.map((restaurant, index) => (
                <Card
                  key={index}
                  name={restaurant.name}
                  rating={restaurant.rating}
                  location={restaurant.address}
                  image_url={imagesModal[index % imagesModal.length].img}
                  reviews={"275"}
                  liked={true}
                  category={restaurant.foodTypes
                    .map((foodType) => foodType.name)
                    .join("/")}
                  handleAddToCart={() => handleAddToCart(restaurant)}
                  openModal={() => handleCardClick(restaurant)}
                  id={restaurant.id_restaurant}
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
            className={`pagination-previous ${currentPage === 1 ? "is-disabled none" : ""
              }`}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            {"<"}
          </Link>
          <ul className="pagination-list">
            {[...Array(totalPages).keys()].map((pageNumber) => (
              <li key={pageNumber}>
                <Link
                  to={`/home/${pageNumber + 1}`}
                  className={`pagination-link ${currentPage === pageNumber + 1 ? "is-current" : ""
                    }`}
                  aria-label={`Goto page ${pageNumber + 1}`}
                  onClick={() => handlePageChange(pageNumber + 1)}
                >
                  {pageNumber + 1}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to={`/home/${currentPage + 1}`}
            className={`pagination-next ${currentPage === totalPages ? "is-disabled none" : ""
              }`}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            {">"}
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Home;
