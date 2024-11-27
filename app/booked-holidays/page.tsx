import classes from "./page.module.scss";
import utils from "@/app/utils.module.scss";
import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getBookedHolidays } from "@/lib/booked-holidays";
import BookedHolidayCard from "@/components/booked-holiday-card/booked-holiday-card";
import { Holiday } from "../holidays/page";
import Link from "next/link";

interface BookedHolidayTable {
  id: number;
  user_id: number;
  holiday_id: number;
  planned_holiday_id: number | null;
  booking_name: string;
  booking_surname: string;
  booking_email: string;
  booking_phone: string;
  holiday_members: string;
  total_price: number;
}

export type BookedHoliday = Pick<
  Holiday,
  | "image"
  | "country"
  | "city"
  | "hotel_name"
  | "date"
  | "departure_city"
  | "arrival_city"
  | "food"
  | "hotel_features"
  | "hotel_attractions"
  | "hotel_image"
  | "holiday_description"
  | "hotel_description"
  | "food_details"
> &
  BookedHolidayTable;

export const BookedHoliday = async () => {
  const result = await verifyAuth();

  if (!result.user) {
    return redirect("/login");
  }

  const bookedHolidays = await getBookedHolidays(result.user.id);

  return (
    <div className={`container ${classes.holidayCards} ${utils.mt10}`}>
      <div className="content">
        {bookedHolidays && bookedHolidays.length > 0 ? (
          bookedHolidays.map((bookedHoliday) => {
            return (
              <BookedHolidayCard
                key={bookedHoliday.id}
                bookedHoliday={bookedHoliday}
              />
            );
          })
        ) : (
          <div className={classes.noHolidays}>
            <h2 className={utils.mb4}>Brak zarezerwowanych wycieczek</h2>
            <h3>
              <span>Przejdź na stronę </span>
              <Link className={classes.link} href="/holidays">
                wycieczek
              </Link>
              <span> i wybierz coś teraz!</span>
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookedHoliday;
