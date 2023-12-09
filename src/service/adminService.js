export const findAll = async () => {
  try {
    const response = await fetch("http://ec2-18-224-68-91.us-east-2.compute.amazonaws.com:8080/v1/api/restaurants");

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
  const url = `http://ec2-18-224-68-91.us-east-2.compute.amazonaws.com:8080/v1/api/restaurants/delete/${id}`;

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
