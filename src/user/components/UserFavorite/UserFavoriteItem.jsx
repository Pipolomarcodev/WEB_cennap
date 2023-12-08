import { useEffect, useState } from "react";

export const UserFavoriteItem = () => {
  const [favoriteData, setFavoriteData] = useState([]);

  const handlerGetFav = async () => {
    try {
      const userDataString = localStorage.getItem("user");
      const userData = JSON.parse(userDataString);
      const userId = userData.id;

      const response = await fetch(
        `http://localhost:8080/auth/get-fav/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Error al obtener favoritos. Código de estado: ${response.status}`
        );
      }

      const data = await response.json();
      setFavoriteData(data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(favoriteData);

  useEffect(() => {
    handlerGetFav();
  }, []);

  return (
    <>
      {favoriteData.length <= 0 ? (
        <>
          <tbody className="table__tbody">
            <tr>
              <td colSpan="6">
                <h1 className="text-center">
                  No tienes ningún restaurante favorito
                </h1>
              </td>
            </tr>
          </tbody>
        </>
      ) : (
        <>
          <tbody className="tables__tbody">
            {favoriteData.map((restaurant, index) => (
              <tr key={index} className="tables__tr">
                <td className="tables__td">{restaurant.id_restaurant}</td>
                <td className="tables__td">{restaurant.foodTypes[0].name}</td>
                <td className="tables__td">{restaurant.name}</td>
                <td className="tables__td">{restaurant.name}</td>
                <td className="tables__td">{restaurant.name}</td>
                {/* Agrega más campos según la estructura de tu objeto de restaurante */}
              </tr>
            ))}
          </tbody>
        </>
      )}
    </>
  );
};
