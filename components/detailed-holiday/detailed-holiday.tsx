"use client";

import classes from "./detailed-holiday.module.scss";
import utils from "@/app/utils.module.scss";
import Button from "@/components/button/button";
import Image from "next/image";
import calendarIcon from "@/public/icons/calendar.svg";
import planeIcon from "@/public/icons/plane.svg";
import forkAndKnifeIcon from "@/public/icons/forkandknife.svg";

import starIcon from "@/public/icons/star.svg";
import starSilverIcon from "@/public/icons/star-silver.svg";
import { Holiday } from "@/app/holidays/page";
import { useCartItemContext } from "@/contexts";
import { useRouter } from "next/navigation";
import Link from "next/link";

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

type DetailedHolidayComponentProps = { holiday: Holiday };

export const DetailedHolidayComponent = ({
  holiday,
}: DetailedHolidayComponentProps) => {
  const { cartData, setCartData } = useCartItemContext();
  const router = useRouter();

  const getHotelFeatures = () => {
    return holiday.hotel_features.split(",");
  };

  const getHotelAttractions = () => {
    return holiday.hotel_attractions.split(",");
  };

  const addToCart = (e: MouseEvent): void => {
    e.stopPropagation();

    const cartDataToAdd = holiday;

    localStorage.setItem("cart", JSON.stringify(cartDataToAdd));

    setCartData(cartDataToAdd);

    router.push("/cart");
  };

  return (
    <div className={`${classes.holidayCards} ${utils.mt10}`}>
      <div className="content">
        <div className={`${classes.holidayCards}`}>
          <Link href="/holidays">
            <h4 className={utils.mb3}>← Cofnij</h4>
          </Link>
          <div className={classes.holidayCard}>
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

                  <div className={utils.mt4}>
                    <strong>Udogodnienia w hotelu:</strong>
                    <ul className={utils.mt2}>
                      {getHotelFeatures().map((hotelFeature, index) => (
                        <li style={{ listStyleType: "none" }} key={index}>
                          ✓ <span>{hotelFeature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={utils.mt4}>
                    <strong>Atrakcje w hotelu:</strong>
                    <ul className={utils.mt2}>
                      {getHotelAttractions().map((hotelAttraction, index) => (
                        <li style={{ listStyleType: "none" }} key={index}>
                          ✓ <span>{hotelAttraction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={utils.mt4}>
                    <strong>Opis hotelu:</strong>
                    <p className={utils.mt1}>{holiday.hotel_description}</p>
                  </div>

                  <div className={classes.holidayCard__imageHotel}>
                    <Image
                      alt="holiday card"
                      src={holiday.hotel_image}
                      sizes="100%"
                      priority
                      fill
                    />
                  </div>

                  <div className={utils.mt4}>
                    <strong>Opis wakacji:</strong>
                    <p className={utils.mt1}>{holiday.holiday_description}</p>
                  </div>

                  <div className={utils.mt4}>
                    <strong>Wyżywienie:</strong>
                    <p className={utils.mt1}>{holiday.food_details}</p>
                  </div>
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
        </div>
      </div>
    </div>
  );
};

export default DetailedHolidayComponent;
