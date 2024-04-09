import { createContext, useReducer, ReactNode } from "react";
import { ActionType, State } from "./types";

const cartReducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case "addToCart":
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      };
    case "resetCart":
      return {
        ...state,
        cartList: [],
      };
    default:
      return state;
  }
};

export const CartContext = createContext<{
  state: State;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: { cartList: [] },
  dispatch: () => {},
});

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, { cartList: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
