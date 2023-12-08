export const findAll = async () => {
  try {
    const response = await fetch("http://localhost:8080/v1/api/restaurants");

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const remove = async (id, token) => {
  const url = `http://localhost:8080/v1/api/restaurants/delete/${id}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Error eliminando el recurso. Estado: ${response.status}`
      );
    }

    console.log("Recurso eliminado con éxito");
  } catch (error) {
    console.error("Error al intentar eliminar el recurso:", error);
    throw error;
  }
};
