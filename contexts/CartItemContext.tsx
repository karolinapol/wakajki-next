"use client";

import { Holiday } from "@/app/holidays/page";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface ICartItemContext {
  cartData: Holiday | null;
  setCartData: Dispatch<SetStateAction<Holiday | null>>;
  userId: number | null;
  setUserId: Dispatch<SetStateAction<number>> | Dispatch<SetStateAction<null>>;
  clearCartData: () => void;
}

export const CartItemContext = createContext<ICartItemContext | null>(null);

export const CartItemContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const items = localStorage.getItem("cart")
    ? (JSON.parse(localStorage.getItem("cart") ?? "") as Holiday)
    : null;

  const [cartData, setCartData] = useState(items);
  const [userId, setUserId] = useState(null);

  const clearCartData = () => {
    localStorage.removeItem("cart");
    setCartData(null);
  };

  return (
    <CartItemContext.Provider
      value={{ cartData, setCartData, userId, setUserId, clearCartData }}
    >
      {children}
    </CartItemContext.Provider>
  );
};

export const useCartItemContext = (): ICartItemContext => {
  const cartItemContext = useContext(CartItemContext);
  if (!cartItemContext) {
    throw new Error("use cart item context provider");
  }
  return cartItemContext;
};
