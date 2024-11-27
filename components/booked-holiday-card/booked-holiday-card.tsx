"use client";

import calendarIcon from "@/public/icons/calendar.svg";
import { useRouter } from "next/navigation";
import classes from "./booked-holiday-card.module.scss";

import Image from "next/image";

import BookedHoliday from "@/app/booked-holidays/page";
import Button from "../button/button";
import utils from "@/app/utils.module.scss";

type HolidayCardProps = {
  bookedHoliday: BookedHoliday;
};

export const BookedHolidayCard = ({
  bookedHoliday,
}: HolidayCardProps): JSX.Element => {
  const router = useRouter();

  const navigateToHolidayPlanner = () => {
    router.push(`/booked-holidays/${bookedHoliday.id}`);
  };

  const getHolidayMembers = () => {
    return bookedHoliday.holiday_members.split(",");
  };

  return (
    <div className={classes.bookedHolidayCard}>
      <div className={classes.bookedHolidayCard__content}>
        <div className={classes.bookedHolidayCard__image}>
          <Image
            alt="holiday card"
            src={bookedHoliday.image}
            sizes="100%"
            priority
            fill
          />
        </div>

        <div className={classes.bookedHolidayCard__data}>
          <p>
            <strong>{`${bookedHoliday.country}/${bookedHoliday.city}`}</strong>
          </p>
          <div className={classes.bookedHolidayCard__info}>
            <p>{bookedHoliday.hotel_name}</p>
            <p>
              <Image
                className={classes.bookedHolidayCard__icon}
                alt="holiday card date"
                src={calendarIcon}
              />
              {bookedHoliday.date}
            </p>
          </div>
          <div className={utils.mt4}>
            <strong>Uczestnicy wycieczki:</strong>
            <ol className={utils.mt2}>
              {getHolidayMembers().map((holidayMember, index) => (
                <li style={{ listStylePosition: "inside" }} key={index}>
                  {holidayMember}
                </li>
              ))}
            </ol>
          </div>
          <div className={classes.bookedHolidayCard__price}>
            <Button
              text="Zaplanuj wycieczkę!"
              type="submit"
              color="Yellow"
              onClick={navigateToHolidayPlanner}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedHolidayCard;
