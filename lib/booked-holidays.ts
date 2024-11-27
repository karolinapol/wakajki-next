import BookedHoliday from "@/app/booked-holidays/page";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const sql = require("better-sqlite3");
const db = sql("holidays.db");

export async function getBookedHolidays(userId): Promise<BookedHoliday[]> {
  return db
    .prepare(
      `
      SELECT 
        booked_holidays.id,
        booked_holidays.user_id,
        booked_holidays.holiday_id,
        booked_holidays.booking_name,
        booked_holidays.booking_surname,
        booked_holidays.booking_email,
        booked_holidays.booking_phone,
        booked_holidays.holiday_members,
        booked_holidays.total_price,
        holidays.image,
        holidays.country,
        holidays.city,
        holidays.hotel_name,
        holidays.date,
        holidays.departure_city,
        holidays.arrival_city,
        holidays.food,
        holidays.hotel_features,
        holidays.hotel_attractions,
        holidays.hotel_image,
        holidays.holiday_description,
        holidays.hotel_description,
        holidays.food_details
      FROM booked_holidays
      INNER JOIN holidays ON booked_holidays.holiday_id = holidays.id
      WHERE user_id = ?`
    )
    .all(userId) as BookedHoliday[];
}
