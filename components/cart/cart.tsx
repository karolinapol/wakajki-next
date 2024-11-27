"use client";

import { useCartItemContext } from "@/contexts";
import classes from "./cart.module.scss";
import utils from "@/app/utils.module.scss";
import Link from "next/link";
import CartCustomerData from "@/components/cart-customer-data/cart-customer-data";
import CartSummary from "@/components/cart-summary/cart-summary";

export const Cart = () => {
  const { cartData } = useCartItemContext();

  return cartData ? (
    <div className={`${classes.cart} content`}>
      <div className={classes.cart__customerData}>
        <CartCustomerData />
      </div>
      <div className={classes.cart__summary}>
        <CartSummary />
      </div>
    </div>
  ) : (
    <div className={classes.cart__empty}>
      <h2 className={utils.mb4}>Koszyk pusty</h2>
      <h3>
        <span>Przejdź na stronę </span>
        <Link className={classes.link} href="/holidays">
          wycieczek
        </Link>
        <span> i wybierz coś teraz!</span>
      </h3>
    </div>
  );
};
