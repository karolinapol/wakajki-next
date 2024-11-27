"use client";

import classes from "./holiday-card.module.scss";

import { useCartItemContext } from "@/contexts";
import Image from "next/image";
import Button from "../button/button";

import calendarIcon from "@/public/icons/calendar.svg";
import planeIcon from "@/public/icons/plane.svg";
import forkAndKnifeIcon from "@/public/icons/forkandknife.svg";
import starIcon from "@/public/icons/star.svg";
import starSilverIcon from "@/public/icons/star-silver.svg";
import { useRouter } from "next/navigation";
import { Holiday } from "@/app/holidays/page";

export const generateStars = (rating: string) => {
  const ratingNumber = +rating;
  const stars = [];

  // Fill the stars according to the rating
  for (let i = 0; i < ratingNumber; i++) {
    stars.push(
      <Image
        key={`star-filled-${i}`}
        className={`${classes.holidayCard__iconStar}`}
        src={starIcon}
        alt="filled star"
      />
    );
  }

  // Add gray (empty) stars for the remaining up to 5 stars
  for (let i = ratingNumber; i < 5; i++) {
    stars.push(
      <Image
        key={`star-empty-${i}`}
        className={`${classes.holidayCard__iconStar}`}
        src={starSilverIcon}
        alt="empty star"
      />
    );
  }

  return stars;
};

type HolidayCardProps = {
  holiday: Holiday;
};

export const HolidayCard = ({ holiday }: HolidayCardProps): JSX.Element => {
  const { cartData, setCartData } = useCartItemContext();

  const router = useRouter();

  const navigateToHolidayDetails = () => {
    router.push(`/holidays/${holiday.slug}`);
  };

  const addToCart = (e: MouseEvent): void => {
    e.stopPropagation();

    localStorage.setItem("cart", JSON.stringify(holiday));

    setCartData(holiday);

    router.push("/cart");
  };

  return (
    <div className={classes.holidayCard} onClick={navigateToHolidayDetails}>
      <div className={classes.holidayCard__content}>
        <div className={classes.holidayCard__image}>
          <Image
            alt="holiday card"
            src={holiday.image}
            sizes="100%"
            priority
            fill
          />
        </div>

        <div className={classes.holidayCard__data}>
          <p>
            <strong>{`${holiday.country}/${holiday.city}`}</strong>
          </p>
          <div className={classes.holidayCard__info}>
            <p>{holiday.hotel_name}</p>
            <p>
              <Image
                className={classes.holidayCard__icon}
                alt="holiday card date"
                src={calendarIcon}
              />
              {holiday.date}
            </p>
            <p>
              <Image
                className={classes.holidayCard__icon}
                alt="holiday card plane"
                src={planeIcon}
              />
              {holiday.departure_city}
            </p>
            <p>
              <Image
                style={{ transform: "rotate(90deg)" }}
                className={classes.holidayCard__icon}
                alt="holiday card plane"
                src={planeIcon}
              />
              {holiday.arrival_city}
            </p>
            <p>
              <Image
                className={classes.holidayCard__icon}
                alt="holiday card food"
                src={forkAndKnifeIcon}
              />
              {holiday.food}
            </p>
            <p>{generateStars(holiday.rating)}</p>
          </div>
          <div className={classes.holidayCard__price}>
            <p>
              od <strong>{holiday.price}</strong> zł /os.
            </p>
            <Button
              text="Dodaj do koszyka"
              type="submit"
              color="Yellow"
              isDisabled={cartData ? true : false}
              onClick={(e: MouseEvent) => addToCart(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayCard;
