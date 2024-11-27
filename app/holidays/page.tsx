import HolidayCard from "@/components/holiday-card/holiday-card";
import classes from "./page.module.scss";
import utils from "@/app/utils.module.scss";
import { getHolidays } from "@/lib/holidays";
import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

export interface Holiday {
  id: number;
  image: string;
  slug: string;
  country: string;
  city: string;
  hotel_name: string;
  date: string;
  departure_city: string;
  arrival_city: string;
  food: string;
  rating: string;
  price: number;
  hotel_features: string;
  hotel_attractions: string;
  hotel_image: string;
  holiday_description: string;
  hotel_description: string;
  food_details: string;
}

export const HomePage = async () => {
  const result = await verifyAuth();

  if (!result.user) {
    return redirect("/login");
  }

  const holidaysData = await getHolidays();

  return (
    <div className={`${classes.holidayCards} ${utils.mt10}`}>
      <div className="content">
        {holidaysData?.map((holiday) => {
          return <HolidayCard key={holiday.id} holiday={holiday} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
