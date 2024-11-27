"use client";

import { TourMember } from "@/components/cart-customer-data/cart-customer-data";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface ICartCustomersContext {
  tourMembers: TourMember[];
  setTourMembers: Dispatch<SetStateAction<TourMember[]>>;
  customerName: string;
  setCustomerName: Dispatch<SetStateAction<string>>;
  customerSurname: string;
  setCustomerSurname: Dispatch<SetStateAction<string>>;
  customerEmail: string;
  setCustomerEmail: Dispatch<SetStateAction<string>>;
  customerPhoneNumber: string;
  setCustomerPhoneNumber: Dispatch<SetStateAction<string>>;
  clearCustomersData: () => void;
}

export const CartCustomersContext = createContext<ICartCustomersContext | null>(
  null
);

interface CartCustomersContextProviderProps {
  children: React.ReactNode;
}

export const CartCustomersContextProvider = ({
  children,
}: CartCustomersContextProviderProps): JSX.Element => {
  const initialTourMembers = [
    {
      name: "",
      surname: "",
    },
  ];

  const [tourMembers, setTourMembers] =
    useState<TourMember[]>(initialTourMembers);

  const [customerName, setCustomerName] = useState("");
  const [customerSurname, setCustomerSurname] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");

  const clearCustomersData = () => {
    setCustomerName("");
    setCustomerSurname("");
    setCustomerEmail("");
    setCustomerPhoneNumber("");
    setTourMembers(initialTourMembers);
  };

  return (
    <CartCustomersContext.Provider
      value={{
        tourMembers,
        setTourMembers,
        customerName,
        setCustomerName,
        customerSurname,
        setCustomerSurname,
        customerEmail,
        setCustomerEmail,
        customerPhoneNumber,
        setCustomerPhoneNumber,
        clearCustomersData,
      }}
    >
      {children}
    </CartCustomersContext.Provider>
  );
};

export const useCartCustomersContext = (): ICartCustomersContext => {
  const cartCustomersontext = useContext(CartCustomersContext);
  if (!cartCustomersontext) {
    throw new Error("use cart customers context provider");
  }
  return cartCustomersontext;
};
