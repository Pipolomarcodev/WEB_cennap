export const useItemsCart = () => {
  const handlerAddFav = (id) => {
    const userDataString = localStorage.getItem("user");
    const userData = JSON.parse(userDataString);
    const userId = userData.id;
    const restoId = id;
    fetch(
      `http://ec2-18-224-68-91.us-east-2.compute.amazonaws.com:8080/auth/toggle-fav/${userId}/${restoId}`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Error al agregar o eliminar favorito. Código de estado: ${response.status}`
          );
        }

        console.log(
          `Favorito agregado o eliminado correctamente para el usuario ${userId}.`
        );

        alert(
          `Favorito agregado o eliminado correctamente para el usuario ${userId}.`
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {
    handlerAddFav,
  };
};
