"use server";

import {
  createPlannedHoliday,
  editPlannedHoliday,
} from "@/lib/planned-holidays";
import { revalidatePath } from "next/cache";

export type AuthActionErrors = {
  email: string;
  password: string;
  repeatedPassword: string;
};

export async function createPlannedHolidayAction(
  booked_holiday_id: number,
  formData: FormData
) {
  // Extract values from formData and cast them to the appropriate types
  const main_budget = formData.get("main_budget")
    ? +formData.get("main_budget")!
    : null;
  const insurance_budget = formData.get("insurance_budget")
    ? +formData.get("insurance_budget")!
    : null;
  const shopping_budget = formData.get("shopping_budget")
    ? +formData.get("shopping_budget")!
    : null;
  const souvenirs_budget = formData.get("souvenirs_budget")
    ? +formData.get("souvenirs_budget")!
    : null;
  const activities_budget = formData.get("activities_budget")
    ? +formData.get("activities_budget")!
    : null;
  const food_budget = formData.get("food_budget")
    ? +formData.get("food_budget")!
    : null;

  const has_local_cash = formData.get("has_local_cash") as boolean | null;
  const has_visa = formData.get("has_visa") as boolean | null;
  const has_insurance = formData.get("has_insurance") as boolean | null;
  const has_vaccinations = formData.get("has_vaccinations") as boolean | null;
  const has_passport = formData.get("has_passport") as boolean | null;
  const has_id_card = formData.get("has_id_card") as boolean | null;
  const has_tickets = formData.get("has_tickets") as boolean | null;
  const has_travel_invitation = formData.get("has_travel_invitation") as
    | boolean
    | null;
  const has_intl_driving_license = formData.get("has_intl_driving_license") as
    | boolean
    | null;
  const has_payment_card = formData.get("has_payment_card") as boolean | null;

  const has_tshirts = formData.get("has_tshirts") as boolean | null;
  const has_pants = formData.get("has_pants") as boolean | null;
  const has_underwear = formData.get("has_underwear") as boolean | null;
  const has_shoes = formData.get("has_shoes") as boolean | null;
  const has_jacket = formData.get("has_jacket") as boolean | null;
  const has_raincoat = formData.get("has_raincoat") as boolean | null;
  const has_flip_flops = formData.get("has_flip_flops") as boolean | null;
  const has_headwear = formData.get("has_headwear") as boolean | null;

  const has_toothbrush = formData.get("has_toothbrush") as boolean | null;
  const has_toothpaste = formData.get("has_toothpaste") as boolean | null;
  const has_dental_floss = formData.get("has_dental_floss") as boolean | null;
  const has_shampoo = formData.get("has_shampoo") as boolean | null;
  const has_conditioner = formData.get("has_conditioner") as boolean | null;
  const has_hair_mask = formData.get("has_hair_mask") as boolean | null;
  const has_shower_gel = formData.get("has_shower_gel") as boolean | null;
  const has_soap = formData.get("has_soap") as boolean | null;
  const has_deodorant = formData.get("has_deodorant") as boolean | null;
  const has_perfume = formData.get("has_perfume") as boolean | null;
  const has_moisturizer = formData.get("has_moisturizer") as boolean | null;
  const has_spf_cream = formData.get("has_spf_cream") as boolean | null;
  const has_after_sun_cream = formData.get("has_after_sun_cream") as
    | boolean
    | null;
  const has_razor = formData.get("has_razor") as boolean | null;
  const has_shaving_foam = formData.get("has_shaving_foam") as boolean | null;
  const has_brush = formData.get("has_brush") as boolean | null;
  const has_hair_accessories = formData.get("has_hair_accessories") as
    | boolean
    | null;
  const has_sanitary_products = formData.get("has_sanitary_products") as
    | boolean
    | null;
  const has_foundation = formData.get("has_foundation") as boolean | null;
  const has_mascara = formData.get("has_mascara") as boolean | null;
  const has_lipstick = formData.get("has_lipstick") as boolean | null;
  const has_micellar_water = formData.get("has_micellar_water") as
    | boolean
    | null;
  const has_cotton_pads = formData.get("has_cotton_pads") as boolean | null;

  const has_charger = formData.get("has_charger") as boolean | null;
  const has_powerbank = formData.get("has_powerbank") as boolean | null;
  const has_headphones = formData.get("has_headphones") as boolean | null;
  const has_laptop = formData.get("has_laptop") as boolean | null;
  const has_tablet = formData.get("has_tablet") as boolean | null;
  const has_camera = formData.get("has_camera") as boolean | null;
  const has_watch = formData.get("has_watch") as boolean | null;

  const has_painkillers = formData.get("has_painkillers") as boolean | null;
  const has_bandages = formData.get("has_bandages") as boolean | null;
  const has_insect_spray = formData.get("has_insect_spray") as boolean | null;

  const has_bag = formData.get("has_bag") as boolean | null;
  const has_backpack = formData.get("has_backpack") as boolean | null;
  const has_sunglasses = formData.get("has_sunglasses") as boolean | null;
  const has_water_bottle = formData.get("has_water_bottle") as boolean | null;

  const plane = formData.get("plane")
    ? (formData.get("plane") as string)
    : null;
  const car_rental = formData.get("car_rental")
    ? (formData.get("car_rental") as string)
    : null;
  const taxi_uber = formData.get("taxi_uber")
    ? (formData.get("taxi_uber") as string)
    : null;
  const trains = formData.get("trains")
    ? (formData.get("trains") as string)
    : null;
  const buses = formData.get("buses")
    ? (formData.get("buses") as string)
    : null;
  const trams = formData.get("trams")
    ? (formData.get("trams") as string)
    : null;
  const ships = formData.get("ships")
    ? (formData.get("ships") as string)
    : null;
  const other_transport = formData.get("other_transport")
    ? (formData.get("other_transport") as string)
    : null;

  const airport_to_hotel_transport = formData.get("airport_to_hotel_transport")
    ? (formData.get("airport_to_hotel_transport") as string)
    : null;
  const hotel_to_airport_transport = formData.get("hotel_to_airport_transport")
    ? (formData.get("hotel_to_airport_transport") as string)
    : null;
  const check_in_time = formData.get("check_in_time")
    ? (formData.get("check_in_time") as string)
    : null;
  const check_out_time = formData.get("check_out_time")
    ? (formData.get("check_out_time") as string)
    : null;
  const accommodation_notes = formData.get("accommodation_notes")
    ? (formData.get("accommodation_notes") as string)
    : null;

  const attractions = formData.get("attractions")
    ? (formData.get("attractions") as string)
    : null;
  const restaurants = formData.get("restaurants")
    ? (formData.get("restaurants") as string)
    : null;
  const will_see = formData.get("will_see")
    ? (formData.get("will_see") as string)
    : null;
  const will_taste = formData.get("will_taste")
    ? (formData.get("will_taste") as string)
    : null;
  const will_do = formData.get("will_do")
    ? (formData.get("will_do") as string)
    : null;
  const general_notes = formData.get("general_notes")
    ? (formData.get("general_notes") as string)
    : null;

  // Call createPlannedHoliday with all form data
  createPlannedHoliday(
    booked_holiday_id,
    main_budget,
    insurance_budget,
    shopping_budget,
    souvenirs_budget,
    activities_budget,
    food_budget,
    has_local_cash,
    has_visa,
    has_insurance,
    has_vaccinations,
    has_passport,
    has_id_card,
    has_tickets,
    has_travel_invitation,
    has_intl_driving_license,
    has_payment_card,
    has_tshirts,
    has_pants,
    has_underwear,
    has_shoes,
    has_jacket,
    has_raincoat,
    has_flip_flops,
    has_headwear,
    has_toothbrush,
    has_toothpaste,
    has_dental_floss,
    has_shampoo,
    has_conditioner,
    has_hair_mask,
    has_shower_gel,
    has_soap,
    has_deodorant,
    has_perfume,
    has_moisturizer,
    has_spf_cream,
    has_after_sun_cream,
    has_razor,
    has_shaving_foam,
    has_brush,
    has_hair_accessories,
    has_sanitary_products,
    has_foundation,
    has_mascara,
    has_lipstick,
    has_micellar_water,
    has_cotton_pads,
    has_charger,
    has_powerbank,
    has_headphones,
    has_laptop,
    has_tablet,
    has_camera,
    has_watch,
    has_painkillers,
    has_bandages,
    has_insect_spray,
    has_bag,
    has_backpack,
    has_sunglasses,
    has_water_bottle,
    plane,
    car_rental,
    taxi_uber,
    trains,
    buses,
    trams,
    ships,
    other_transport,
    airport_to_hotel_transport,
    hotel_to_airport_transport,
    check_in_time,
    check_out_time,
    accommodation_notes,
    attractions,
    restaurants,
    will_see,
    will_taste,
    will_do,
    general_notes
  );

  revalidatePath("/planned-holidays");
}

export async function editPlannedHolidayAction(
  planned_holiday_id: number,
  formData: FormData
) {
  // Extract and cast values from formData
  const main_budget = formData.get("main_budget") as number | null;
  const insurance_budget = formData.get("insurance_budget") as number | null;
  const shopping_budget = formData.get("shopping_budget") as number | null;
  const souvenirs_budget = formData.get("souvenirs_budget") as number | null;
  const activities_budget = formData.get("activities_budget") as number | null;
  const food_budget = formData.get("food_budget") as number | null;

  const has_local_cash = formData.get("has_local_cash") as boolean | null;
  const has_visa = formData.get("has_visa") as boolean | null;
  const has_insurance = formData.get("has_insurance") as boolean | null;
  const has_vaccinations = formData.get("has_vaccinations") as boolean | null;
  const has_passport = formData.get("has_passport") as boolean | null;
  const has_id_card = formData.get("has_id_card") as boolean | null;
  const has_tickets = formData.get("has_tickets") as boolean | null;
  const has_travel_invitation = formData.get("has_travel_invitation") as
    | boolean
    | null;
  const has_intl_driving_license = formData.get("has_intl_driving_license") as
    | boolean
    | null;
  const has_payment_card = formData.get("has_payment_card") as boolean | null;

  const has_tshirts = formData.get("has_tshirts") as boolean | null;
  const has_pants = formData.get("has_pants") as boolean | null;
  const has_underwear = formData.get("has_underwear") as boolean | null;
  const has_shoes = formData.get("has_shoes") as boolean | null;
  const has_jacket = formData.get("has_jacket") as boolean | null;
  const has_raincoat = formData.get("has_raincoat") as boolean | null;
  const has_flip_flops = formData.get("has_flip_flops") as boolean | null;
  const has_headwear = formData.get("has_headwear") as boolean | null;

  const has_toothbrush = formData.get("has_toothbrush") as boolean | null;
  const has_toothpaste = formData.get("has_toothpaste") as boolean | null;
  const has_dental_floss = formData.get("has_dental_floss") as boolean | null;
  const has_shampoo = formData.get("has_shampoo") as boolean | null;
  const has_conditioner = formData.get("has_conditioner") as boolean | null;
  const has_hair_mask = formData.get("has_hair_mask") as boolean | null;
  const has_shower_gel = formData.get("has_shower_gel") as boolean | null;
  const has_soap = formData.get("has_soap") as boolean | null;
  const has_deodorant = formData.get("has_deodorant") as boolean | null;
  const has_perfume = formData.get("has_perfume") as boolean | null;
  const has_moisturizer = formData.get("has_moisturizer") as boolean | null;
  const has_spf_cream = formData.get("has_spf_cream") as boolean | null;
  const has_after_sun_cream = formData.get("has_after_sun_cream") as
    | boolean
    | null;
  const has_razor = formData.get("has_razor") as boolean | null;
  const has_shaving_foam = formData.get("has_shaving_foam") as boolean | null;
  const has_brush = formData.get("has_brush") as boolean | null;
  const has_hair_accessories = formData.get("has_hair_accessories") as
    | boolean
    | null;
  const has_sanitary_products = formData.get("has_sanitary_products") as
    | boolean
    | null;
  const has_foundation = formData.get("has_foundation") as boolean | null;
  const has_mascara = formData.get("has_mascara") as boolean | null;
  const has_lipstick = formData.get("has_lipstick") as boolean | null;
  const has_micellar_water = formData.get("has_micellar_water") as
    | boolean
    | null;
  const has_cotton_pads = formData.get("has_cotton_pads") as boolean | null;

  const has_charger = formData.get("has_charger") as boolean | null;
  const has_powerbank = formData.get("has_powerbank") as boolean | null;
  const has_headphones = formData.get("has_headphones") as boolean | null;
  const has_laptop = formData.get("has_laptop") as boolean | null;
  const has_tablet = formData.get("has_tablet") as boolean | null;
  const has_camera = formData.get("has_camera") as boolean | null;
  const has_watch = formData.get("has_watch") as boolean | null;

  const has_painkillers = formData.get("has_painkillers") as boolean | null;
  const has_bandages = formData.get("has_bandages") as boolean | null;
  const has_insect_spray = formData.get("has_insect_spray") as boolean | null;

  const has_bag = formData.get("has_bag") as boolean | null;
  const has_backpack = formData.get("has_backpack") as boolean | null;
  const has_sunglasses = formData.get("has_sunglasses") as boolean | null;
  const has_water_bottle = formData.get("has_water_bottle") as boolean | null;

  const plane = formData.get("plane") as string | null;
  const car_rental = formData.get("car_rental") as string | null;
  const taxi_uber = formData.get("taxi_uber") as string | null;
  const trains = formData.get("trains") as string | null;
  const buses = formData.get("buses") as string | null;
  const trams = formData.get("trams") as string | null;
  const ships = formData.get("ships") as string | null;
  const other_transport = formData.get("other_transport") as string | null;

  const airport_to_hotel_transport = formData.get(
    "airport_to_hotel_transport"
  ) as string | null;
  const hotel_to_airport_transport = formData.get(
    "hotel_to_airport_transport"
  ) as string | null;
  const check_in_time = formData.get("check_in_time") as string | null;
  const check_out_time = formData.get("check_out_time") as string | null;
  const accommodation_notes = formData.get("accommodation_notes") as
    | string
    | null;

  const attractions = formData.get("attractions") as string | null;
  const restaurants = formData.get("restaurants") as string | null;
  const will_see = formData.get("will_see") as string | null;
  const will_taste = formData.get("will_taste") as string | null;
  const will_do = formData.get("will_do") as string | null;
  const general_notes = formData.get("general_notes") as string | null;

  // Call editPlannedHoliday with all form data
  editPlannedHoliday(
    planned_holiday_id,
    main_budget,
    insurance_budget,
    shopping_budget,
    souvenirs_budget,
    activities_budget,
    food_budget,
    has_local_cash,
    has_visa,
    has_insurance,
    has_vaccinations,
    has_passport,
    has_id_card,
    has_tickets,
    has_travel_invitation,
    has_intl_driving_license,
    has_payment_card,
    has_tshirts,
    has_pants,
    has_underwear,
    has_shoes,
    has_jacket,
    has_raincoat,
    has_flip_flops,
    has_headwear,
    has_toothbrush,
    has_toothpaste,
    has_dental_floss,
    has_shampoo,
    has_conditioner,
    has_hair_mask,
    has_shower_gel,
    has_soap,
    has_deodorant,
    has_perfume,
    has_moisturizer,
    has_spf_cream,
    has_after_sun_cream,
    has_razor,
    has_shaving_foam,
    has_brush,
    has_hair_accessories,
    has_sanitary_products,
    has_foundation,
    has_mascara,
    has_lipstick,
    has_micellar_water,
    has_cotton_pads,
    has_charger,
    has_powerbank,
    has_headphones,
    has_laptop,
    has_tablet,
    has_camera,
    has_watch,
    has_painkillers,
    has_bandages,
    has_insect_spray,
    has_bag,
    has_backpack,
    has_sunglasses,
    has_water_bottle,
    plane,
    car_rental,
    taxi_uber,
    trains,
    buses,
    trams,
    ships,
    other_transport,
    airport_to_hotel_transport,
    hotel_to_airport_transport,
    check_in_time,
    check_out_time,
    accommodation_notes,
    attractions,
    restaurants,
    will_see,
    will_taste,
    will_do,
    general_notes
  );

  revalidatePath("/planned-holidays");
}
