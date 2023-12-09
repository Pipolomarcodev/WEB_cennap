import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  loading: true,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();
  const [reserveData, setReserveData] = useState(null);
  const setReserveDataGlobal = (data) => {
    setReserveData(data);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      dispatch({ type: "SET_LOADING" });

      const fetchUser = async () => {
        try {
          const response = await fetch(
            `http://ec2-18-224-68-91.us-east-2.compute.amazonaws.com:8080/auth/get-user/${storedToken}`,
            {
              method: "GET",
            }
          );

          if (response.ok) {
            const user = await response.json();
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", storedToken);
            dispatch({ type: "LOGIN", payload: { user, token: storedToken } });
          } else {
            if (response.status === 401) {
              console.warn("Token inválido, cerrando sesión...");
              dispatch({ type: "LOGOUT" });
              localStorage.removeItem("token");
              localStorage.removeItem("user");
            }
          }
        } catch (error) {
          console.error("Error al obtener información del usuario:", error);
        } finally {
          dispatch({ type: "SET_LOADING" });
        }
      };

      fetchUser();
    }
  }, []);

  const login = (token) => {
    dispatch({ type: "LOGIN", payload: { token } });
    localStorage.setItem("token", token);
    navigate("/home/1");
    window.location.reload();
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/home/1");
    window.location.reload();
  };

  const verifyUser = async () => {
    try {
      const response = await fetch(
        `http://ec2-18-224-68-91.us-east-2.compute.amazonaws.com:8080/auth/get-user/${state.token}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          console.warn("Token inválido, cerrando sesión...");
          dispatch({ type: "LOGOUT" });
        }
      }
    } catch (error) {
      console.error("Error al verificar la validez del token:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        loading: state.loading,
        reserveData,
        login,
        logout,
        verifyUser,
        setReserveDataGlobal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
