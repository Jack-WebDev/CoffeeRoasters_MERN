import { createContext, useReducer } from "react";

export const OrdersContext = createContext();

export const OrdersReducer = (state, action) => {
  switch (action.type) {
    case "GET_ORDERS":
      return {
        orders: action.payload,
      };
    case "CREATE_ORDER":
      return {
        orders: [action.payload, ...state.orders],
      };
    case "DELETE_ORDER":
      return {
        orders: state.orders.filter((order) => order.id !== action.payload.id),
      };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const OrdersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(OrdersReducer, {
    orders: null,
  });

  return (
    <OrdersContext.Provider value={{ ...state, dispatch }}>
      {children}
    </OrdersContext.Provider>
  );
};
