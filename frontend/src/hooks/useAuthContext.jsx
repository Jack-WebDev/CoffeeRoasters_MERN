import { AuthClientContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthClientContext);

  if (!context) {
    throw Error(
      "useOrdersContext must be used inside an OrdersContextProvider"
    );
  }

  return context;
};
