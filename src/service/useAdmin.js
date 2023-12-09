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
