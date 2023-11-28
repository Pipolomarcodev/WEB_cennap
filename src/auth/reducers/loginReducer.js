export const loginReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        isAuth: true,
      };
    case "logout":
      return {
        isAuth: false,
        user: null,
      };
    default:
      return state;
  }
};
