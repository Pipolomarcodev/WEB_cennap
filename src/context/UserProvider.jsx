// UserProvider.js
import { useReducer } from "react";
import { UserContext } from "./UserContext";
import { userUsers } from "../service/useUsers";
import { loginReducer } from "../auth/reducers/loginReducer";
import { useNavigate } from "react-router-dom";
import { useItemsCart } from "../hooks/useItemsCart";

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, {
    isAuth: false,
    user: null,
  });
  const { cartItems, handlerAddProductCart, handlerDeleteProductCart } =
    useItemsCart();
  const navigate = useNavigate();
  const login = async (credentials) => {
    try {
      const response = await userUsers.login(credentials);
      dispatch({ type: "login", payload: response });
      if (response.token) {
        navigate("/home/page");
      }
      console.log(response);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <UserContext.Provider
      value={{
        state,
        login,
        logout,
        isAuth: state.isAuth,
        user: state.user,
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
