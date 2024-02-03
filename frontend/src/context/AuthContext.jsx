import { createContext, useReducer, useEffect } from "react";

export const AuthClientContext = createContext();

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { client: action.payload };
    case "LOGOUT":
      return { client: null };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const AuthClientContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    client: null,
  });

  useEffect(() => {
    const client = localStorage.getItem("user");

    if (client) {
      dispatch({ type: "LOGIN", payload: client });
    }
  }, []);

  return (
    <AuthClientContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthClientContext.Provider>
  );
};
