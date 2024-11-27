"use client";

import { useCartCustomersContext, useCartItemContext } from "@/contexts";
import Button from "../button/button";
import Image from "next/image";
import classes from "./cart-summary.module.scss";
import utils from "@/app/utils.module.scss";

import calendarIcon from "@/public/icons/calendar.svg";
import planeIcon from "@/public/icons/plane.svg";
import forkAndKnifeIcon from "@/public/icons/forkandknife.svg";

import visaIcon from "@/public/icons/visa.svg";
import masterCardIcon from "@/public/icons/mastercard.svg";
import blikIcon from "@/public/icons/blik.svg";
import paypalIcon from "@/public/icons/paypal.svg";
import googlePayIcon from "@/public/icons/gpay.svg";
import applePayIcon from "@/public/icons/applepay.svg";

export const CartSummary = (): JSX.Element => {
  const {
    tourMembers,
    customerName,
    customerSurname,
    customerEmail,
    customerPhoneNumber,
    clearCustomersData,
  } = useCartCustomersContext();
  const { userId, cartData, clearCartData } = useCartItemContext();

  const procedToCheckout = async () => {
    const tourMembersString = tourMembers
      .map((member) => `${member.name} ${member.surname}`)
      .join(", ");

    const totalPrice = cartData!.price * tourMembers.length;

    try {
      const response = await fetch("/api/book-holiday", {
        method: "POST",
        body: JSON.stringify({
          user_id: userId,
          holiday_id: cartData!.id,
          booking_name: customerName,
          booking_surname: customerSurname,
          booking_email: customerEmail,
          booking_phone: customerPhoneNumber,
          holiday_members: tourMembersString,
          total_price: totalPrice,
        }),
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      clearCustomersData();
      clearCartData();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const isProceedToCheckoutDisabled = (): boolean => {
    return (
      customerName === "" ||
      customerSurname === "" ||
      customerEmail === "" ||
      customerPhoneNumber === "" ||
      tourMembers[tourMembers.length - 1]?.name === "" ||
      tourMembers[tourMembers.length - 1]?.surname === ""
    );
  };

  return (
    <div className={classes.cartSummary}>
      <h2 className={utils.mb5}>Podsumowanie wycieczki</h2>
      <div className={classes.cartSummary__image}>
        <Image alt="holiday" src={cartData!.image} fill />
      </div>
      <div className={classes.cartSummary__content}>
        <p>
          <strong>
            {cartData!.country}/{cartData!.city}
          </strong>
        </p>
        <p>
          <Image
            className={classes.cartSummary__icon}
            alt="holiday card date"
            src={calendarIcon}
          />
          {cartData!.date}
        </p>
        <p>
          <Image
            className={classes.cartSummary__icon}
            alt="holiday card plane"
            src={planeIcon}
          />
          {cartData!.departure_city}
        </p>
        <p>
          <Image
            style={{ transform: "rotate(90deg)" }}
            className={classes.cartSummary__icon}
            alt="holiday card plane"
            src={planeIcon}
          />
          {cartData!.arrival_city}
        </p>
        <p>
          <Image
            className={classes.cartSummary__icon}
            alt="holiday card food"
            src={forkAndKnifeIcon}
          />
          {cartData!.food}
        </p>
        <p className="mt-7">Liczba osób: {tourMembers.length}</p>
        <p>
          cena: <strong>{cartData!.price * tourMembers.length}</strong> zł
        </p>
        <div className="cart-summary__payment mt-10">
          <p>Akceptowalne płatności:</p>
          <Image
            className={classes.cartSummary__paymentMethod}
            alt="visa"
            src={visaIcon}
          />

          <Image
            className={classes.cartSummary__paymentMethod}
            alt="masterCard"
            src={masterCardIcon}
          />
          <Image
            className={classes.cartSummary__paymentMethod}
            alt="blik"
            src={blikIcon}
          />
          <Image
            className={classes.cartSummary__paymentMethod}
            alt="paypal"
            src={paypalIcon}
          />
          <Image
            className={classes.cartSummary__paymentMethod}
            alt="google pay"
            src={googlePayIcon}
          />
          <Image
            className={classes.cartSummary__paymentMethod}
            alt="apple pay"
            src={applePayIcon}
          />

          <Button
            text="Przejdź do płatności"
            type="submit"
            color="Yellow"
            isDisabled={isProceedToCheckoutDisabled()}
            onClick={procedToCheckout}
          />
          <Button
            text="Usuń z koszyka"
            type="submit"
            additionalClasses={utils.mt2}
            color="Red"
            isDisabled={false}
            onClick={clearCartData}
          />
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
