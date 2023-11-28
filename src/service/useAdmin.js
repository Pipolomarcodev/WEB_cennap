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
