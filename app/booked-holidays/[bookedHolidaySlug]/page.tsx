// import HolidayCard from "@/components/holiday-planner/holiday-planner";
import utils from "@/app/utils.module.scss";
import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import BookedHoliday from "../page";
import HolidayPlanner from "@/components/holiday-planner/holiday-planner";

export type PlannedHoliday = BookedHoliday & {
  // 1
  main_budget: number | null;
  insurance_budget: number | null;
  shopping_budget: number | null;
  souvenirs_budget: number | null;
  activities_budget: number | null;
  food_budget: number | null;
  has_local_cash: boolean | null;
  // 2
  has_visa: boolean | null;
  has_insurance: boolean | null;
  has_vaccinations: boolean | null;
  has_passport: boolean | null;
  has_id_card: boolean | null;
  has_tickets: boolean | null;
  has_travel_invitation: boolean | null;
  has_intl_driving_license: boolean | null;
  has_payment_card: boolean | null;
  // 3.1
  has_tshirts: boolean | null;
  has_pants: boolean | null;
  has_underwear: boolean | null;
  has_shoes: boolean | null;
  has_jacket: boolean | null;
  has_raincoat: boolean | null;
  has_flip_flops: boolean | null;
  has_headwear: boolean | null;
  // 3.2
  has_toothbrush: boolean | null;
  has_toothpaste: boolean | null;
  has_dental_floss: boolean | null;
  has_shampoo: boolean | null;
  has_conditioner: boolean | null;
  has_hair_mask: boolean | null;
  has_shower_gel: boolean | null;
  has_soap: boolean | null;
  has_deodorant: boolean | null;
  has_perfume: boolean | null;
  has_moisturizer: boolean | null;
  has_spf_cream: boolean | null;
  has_after_sun_cream: boolean | null;
  has_razor: boolean | null;
  has_shaving_foam: boolean | null;
  has_brush: boolean | null;
  has_hair_accessories: boolean | null;
  has_sanitary_products: boolean | null;
  has_foundation: boolean | null;
  has_mascara: boolean | null;
  has_lipstick: boolean | null;
  has_micellar_water: boolean | null;
  has_cotton_pads: boolean | null;
  // 3.3
  has_charger: boolean | null;
  has_powerbank: boolean | null;
  has_headphones: boolean | null;
  has_laptop: boolean | null;
  has_tablet: boolean | null;
  has_camera: boolean | null;
  has_watch: boolean | null;
  // 3.4
  has_painkillers: boolean | null;
  has_bandages: boolean | null;
  has_insect_spray: boolean | null;
  // 3.5
  has_bag: boolean | null;
  has_backpack: boolean | null;
  has_sunglasses: boolean | null;
  has_water_bottle: boolean | null;
  // 4
  plane: string | null;
  car_rental: string | null;
  taxi_uber: string | null;
  trains: string | null;
  buses: string | null;
  trams: string | null;
  ships: string | null;
  other_transport: string | null;
  // 5
  airport_to_hotel_transport: string | null;
  hotel_to_airport_transport: string | null;
  check_in_time: string | null;
  check_out_time: string | null;
  accommodation_notes: string | null;
  // 6
  attractions: string | null;
  // 7
  restaurants: string | null;
  // 8
  will_see: string | null;
  will_taste: string | null;
  will_do: string | null;
  // 9
  general_notes: string | null;
};

export const HolidayPlannerPage = async ({
  params,
}: {
  params: Promise<{ bookedHolidaySlug: string }>;
}) => {
  const result = await verifyAuth();

  if (!result.user) {
    return redirect("/login");
  }

  const slug = (await params).bookedHolidaySlug;

  return (
    <div className={`container ${utils.mt10}`}>
      <div className="content">
        <HolidayPlanner slug={slug} />
      </div>
    </div>
  );
};

export default HolidayPlannerPage;
