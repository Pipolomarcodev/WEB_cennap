const BASE_URL = "http://ec2-18-224-68-91.us-east-2.compute.amazonaws.com:8080";

const userUsers = {
  login: async (credentials) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/generateToken`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const responseData = await response.json();
        const authToken = responseData.token;
        localStorage.setItem("authToken", authToken);
        return responseData;
      } else {
        console.error("Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  },
};

export { userUsers };
