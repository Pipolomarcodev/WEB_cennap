import { useEffect, useState } from "react";

export const UserFavoriteItem = () => {
  const [favoriteData, setFavoriteData] = useState([]);

  const handlerGetFav = async () => {
    try {
      const userDataString = localStorage.getItem("user");
      const userData = JSON.parse(userDataString);
      const userId = userData.id;

      const response = await fetch(
        `http://ec2-18-224-68-91.us-east-2.compute.amazonaws.com:8080/auth/get-fav/${userId}`,
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
        favoriteData.map((like) => (
          <>
            <div className="table-datos">
              <div className="tables__info">
                <p>{like.name}</p>
              </div>
              <div className="tables__info">
                <p>{like.foodTypes[0].name}</p>
              </div>
              <div className="tables__info">
                <p>{like.phone}</p>
              </div>
              <div className="tables__info">
                <p>{like.zone_street}</p>
              </div>
              <div className="tables__info">
                <p>{like.zone_street}</p>
              </div>
            </div>
          </>
        ))
      )}
    </>
  );
};
