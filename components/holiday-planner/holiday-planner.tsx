import classes from "./holiday-planner.module.scss";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "../button/button";
import utils from "@/app/utils.module.scss";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Image from "next/image";
import planeIcon from "@/public/icons/plane.svg";
import calendarIcon from "@/public/icons/calendar.svg";
import forkAndKnifeIcon from "@/public/icons/forkandknife.svg";

import Link from "next/link";
import {
  createPlannedHolidayAction,
  editPlannedHolidayAction,
} from "@/actions/holiday-planner-actions";
import { getPlannedHoliday } from "@/lib/planned-holidays";
import InputNative from "../input-native/input-native";
import CheckboxNative from "../checkbox-native/checkbox-native";
import TextareaNative from "../textarea-native/textarea-native";

type HolidayPlannerProps = {
  slug: string;
};

export const HolidayPlanner = async ({
  slug,
}: HolidayPlannerProps): Promise<JSX.Element> => {
  const plannedHoliday = await getPlannedHoliday(slug);

  const createPlannedHolidayActionWithBookedHolidayId =
    createPlannedHolidayAction.bind(null, plannedHoliday.id);

  const editPlannedHolidayActionWithBookedHolidayId =
    editPlannedHolidayAction.bind(null, plannedHoliday.planned_holiday_id!);

  const getHolidayMembers = () => {
    return plannedHoliday.holiday_members.split(",");
  };

  const getHotelFeatures = () => {
    return plannedHoliday.hotel_features.split(",");
  };

  const getHotelAttractions = () => {
    return plannedHoliday.hotel_attractions.split(",");
  };

  return (
    <>
      <Link href="/booked-holidays">
        <h4 className={utils.mb3}>← Cofnij</h4>
      </Link>

      <div className={classes.plannedHolidayCard}>
        <section className={`${classes.holidayDetails}`}>
          <div className={classes.holidayDetails__image}>
            <Image
              alt="holiday card"
              src={plannedHoliday.image}
              sizes="100%"
              priority
              fill
            />
          </div>

          <div className={classes.holidayDetails__details}>
            <h3
              className={utils.mb4}
            >{`${plannedHoliday.country}/${plannedHoliday.city}`}</h3>
            <p className={utils.mb2}>{plannedHoliday.hotel_name}</p>
            <p className={utils.mb2}>
              <Image
                className={classes.holidayDetails__icon}
                alt="holiday card date"
                src={calendarIcon}
              />
              {plannedHoliday.date}
            </p>
            <p>
              <Image
                className={classes.holidayDetails__icon}
                alt="holiday card plane"
                src={planeIcon}
              />
              {plannedHoliday.departure_city}
            </p>
            <p>
              <Image
                style={{ transform: "rotate(90deg)" }}
                className={classes.holidayDetails__icon}
                alt="holiday card plane"
                src={planeIcon}
              />
              {plannedHoliday.arrival_city}
            </p>
            <p>
              <Image
                className={classes.holidayDetails__icon}
                alt="holiday card food"
                src={forkAndKnifeIcon}
              />
              {plannedHoliday.food}
            </p>
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
          </div>
        </section>

        <section className={classes.mapContainer}>
          <h3 className={utils.mb2}>Mapa</h3>
          <iframe
            className={classes.map}
            src={`https://maps.google.com/maps?q=${plannedHoliday.city}&output=embed`}
            title="map"
            width="100%"
            height="100%"
          />
          <button className={classes.attractionsButton}>
            <a
              href={`https://www.google.com/search?q=atrakcje+w+${plannedHoliday.city}`}
              target="_blank"
            >
              Przeglądaj atrakcje w {plannedHoliday.city}
            </a>
          </button>
        </section>

        <form
          id="form"
          action={
            plannedHoliday.planned_holiday_id
              ? editPlannedHolidayActionWithBookedHolidayId
              : createPlannedHolidayActionWithBookedHolidayId
          }
        >
          <Accordion className={classes.section}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              id="panel-header"
              aria-controls="panel-content"
            >
              <h4>1/9 - Budżet</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className={classes.sectionDescription}>
                Zakładka Budżet pozwala na łatwe zarządzanie wydatkami podczas
                planowania Twojego wyjazdu. Możesz tutaj zaplanować i
                monitorować koszty w różnych kategoriach, takich jak transport,
                ubezpieczenie, zakupy, pamiątki, atrakcje czy jedzenie. Dzięki
                temu masz pełną kontrolę nad swoim budżetem i możesz upewnić
                się, że Twój plan finansowy pozostaje w ryzach.
              </p>
              <InputNative
                label="Główny budżet"
                name="main_budget"
                type="currency"
                defaultValue={plannedHoliday.main_budget}
              />
              <InputNative
                label="Ubezpieczenie"
                name="insurance_budget"
                type="currency"
                defaultValue={plannedHoliday.insurance_budget}
              />
              <InputNative
                label="Zakupy"
                name="shopping_budget"
                type="currency"
                defaultValue={plannedHoliday.shopping_budget}
              />
              <InputNative
                label="Pamiątki"
                name="souvenirs_budget"
                type="currency"
                defaultValue={plannedHoliday.souvenirs_budget}
              />
              <InputNative
                label="Atrakcje"
                name="activities_budget"
                type="currency"
                defaultValue={plannedHoliday.activities_budget}
              />
              <InputNative
                label="Jedzenie"
                name="food_budget"
                type="currency"
                defaultValue={plannedHoliday.food_budget}
              />
              <CheckboxNative
                name="has_local_cash"
                label="Lokalna waluta w gotówce"
                defaultValue={plannedHoliday.has_local_cash}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion className={classes.section}>
            <AccordionSummary
              id="panel-header"
              aria-controls="panel-content"
              expandIcon={<ArrowDropDownIcon />}
            >
              <h4>2/9 - Dokumenty i Zdrowie</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className={classes.sectionDescription}>
                Zakładka Dokumenty i Zdrowie to miejsce, w którym możesz zadbać
                o niezbędne formalności związane z Twoją podróżą. Znajdziesz tu
                pola dotyczące wizy, ubezpieczenia oraz wymaganych szczepień,
                dzięki czemu łatwo sprawdzisz, czy wszystko jest gotowe na Twój
                wyjazd. To wygodne narzędzie, które pomoże Ci mieć pod kontrolą
                kluczowe aspekty bezpieczeństwa i przygotowań.
              </p>
              <CheckboxNative
                name="has_visa"
                label="Wiza"
                defaultValue={plannedHoliday.has_visa}
              />
              <CheckboxNative
                name="has_insurance"
                label="Ubezpieczenie"
                defaultValue={plannedHoliday.has_insurance}
              />
              <CheckboxNative
                name="has_vaccinations"
                label="Szczepienia"
                defaultValue={plannedHoliday.has_vaccinations}
              />
              <CheckboxNative
                name="has_passport"
                label="Paszport"
                defaultValue={plannedHoliday.has_passport}
              />
              <CheckboxNative
                name="has_id_card"
                label="Dowód osobisty"
                defaultValue={plannedHoliday.has_id_card}
              />
              <CheckboxNative
                name="has_tickets"
                label="Rezerwacje i bilety"
                defaultValue={plannedHoliday.has_tickets}
              />
              <CheckboxNative
                name="has_travel_invitation"
                label="Zaproszenie/potwierdzenie celu podróży"
                defaultValue={plannedHoliday.has_travel_invitation}
              />
              <CheckboxNative
                name="has_intl_driving_license"
                label="Międzynarodowe prawo jazdy"
                defaultValue={plannedHoliday.has_intl_driving_license}
              />
              <CheckboxNative
                name="has_payment_card"
                label="Karta płatnicza"
                defaultValue={plannedHoliday.has_payment_card}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion className={classes.section}>
            <AccordionSummary
              id="panel-header"
              aria-controls="panel-content"
              expandIcon={<ArrowDropDownIcon />}
            >
              <h4>3/9 - Pakowanie</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className={classes.sectionDescription}>
                Zakładka Pakowanie pomoże Ci w przygotowaniu kompletnych list
                rzeczy niezbędnych na podróż. Znajdziesz tutaj kategorie, takie
                jak ubrania, kosmetyki i higiena, elektronika, apteczka czy
                akcesoria podróżne. Dzięki niej możesz mieć pewność, że niczego
                nie zapomnisz i odpowiednio dopasujesz bagaż do swoich potrzeb i
                celu podróży.
              </p>

              <Accordion
                sx={{
                  backgroundColor: "#c7c7c7",
                }}
                className={utils.mb3}
              >
                <AccordionSummary
                  id="panel-header"
                  aria-controls="panel-content"
                  expandIcon={<ArrowDropDownIcon />}
                >
                  <h4>Ubrania</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <CheckboxNative
                    name="has_tshirts"
                    label="Koszulki"
                    defaultValue={plannedHoliday.has_tshirts}
                  />
                  <CheckboxNative
                    name="has_pants"
                    label="Spodnie"
                    defaultValue={plannedHoliday.has_pants}
                  />
                  <CheckboxNative
                    name="has_underwear"
                    label="Bielizna"
                    defaultValue={plannedHoliday.has_underwear}
                  />
                  <CheckboxNative
                    name="has_shoes"
                    label="Buty"
                    defaultValue={plannedHoliday.has_shoes}
                  />
                  <CheckboxNative
                    name="has_jacket"
                    label="Kurtka"
                    defaultValue={plannedHoliday.has_jacket}
                  />
                  <CheckboxNative
                    name="has_raincoat"
                    label="Kurtka przeciwdeszczowa"
                    defaultValue={plannedHoliday.has_raincoat}
                  />
                  <CheckboxNative
                    name="has_flip_flops"
                    label="Klapki"
                    defaultValue={plannedHoliday.has_flip_flops}
                  />
                  <CheckboxNative
                    name="has_headwear"
                    label="Nakrycie głowy"
                    defaultValue={plannedHoliday.has_headwear}
                  />
                </AccordionDetails>
              </Accordion>

              <Accordion
                sx={{
                  backgroundColor: "#c7c7c7",
                }}
                className={utils.mb3}
              >
                <AccordionSummary
                  id="panel-header"
                  aria-controls="panel-content"
                  expandIcon={<ArrowDropDownIcon />}
                >
                  <h4>Kosmetyki i higiena</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <CheckboxNative
                    name="has_toothbrush"
                    label="Szczoteczka do zębów"
                    defaultValue={plannedHoliday.has_toothbrush}
                  />
                  <CheckboxNative
                    name="has_toothpaste"
                    label="Pasta do zębów"
                    defaultValue={plannedHoliday.has_toothpaste}
                  />
                  <CheckboxNative
                    name="has_dental_floss"
                    label="Nić dentystyczna"
                    defaultValue={plannedHoliday.has_dental_floss}
                  />
                  <CheckboxNative
                    name="has_shampoo"
                    label="Szampon"
                    defaultValue={plannedHoliday.has_shampoo}
                  />
                  <CheckboxNative
                    name="has_conditioner"
                    label="Odżywka do włosów"
                    defaultValue={plannedHoliday.has_conditioner}
                  />
                  <CheckboxNative
                    name="has_hair_mask"
                    label="Maska do włosów"
                    defaultValue={plannedHoliday.has_hair_mask}
                  />
                  <CheckboxNative
                    name="has_bath_gel"
                    label="Żel do kąpieli"
                    defaultValue={plannedHoliday.has_shower_gel}
                  />
                  <CheckboxNative
                    name="has_soap"
                    label="Mydło"
                    defaultValue={plannedHoliday.has_soap}
                  />
                  <CheckboxNative
                    name="has_deodorant"
                    label="Antyperspirant"
                    defaultValue={plannedHoliday.has_deodorant}
                  />
                  <CheckboxNative
                    name="has_perfume"
                    label="Perfumy"
                    defaultValue={plannedHoliday.has_perfume}
                  />
                  <CheckboxNative
                    name="has_moisturizer"
                    label="Krem nawilżający"
                    defaultValue={plannedHoliday.has_moisturizer}
                  />

                  <CheckboxNative
                    name="has_spf_cream"
                    label="Krem spf"
                    defaultValue={plannedHoliday.has_spf_cream}
                  />
                  <CheckboxNative
                    name="has_after_sun_cream"
                    label="Krem po opalaniu"
                    defaultValue={plannedHoliday.has_after_sun_cream}
                  />
                  <CheckboxNative
                    name="has_razor"
                    label="Maszynka do golenia"
                    defaultValue={plannedHoliday.has_razor}
                  />
                  <CheckboxNative
                    name="has_shaving_foam"
                    label="Pianka do golenia"
                    defaultValue={plannedHoliday.has_shaving_foam}
                  />
                  <CheckboxNative
                    name="has_brush"
                    label="Szczotka/grzebień"
                    defaultValue={plannedHoliday.has_brush}
                  />
                  <CheckboxNative
                    name="has_hair_accessories"
                    label="Gumki i spinki do włosów"
                    defaultValue={plannedHoliday.has_hair_accessories}
                  />
                  <CheckboxNative
                    name="has_sanitary_products"
                    label="Podpaski/tampony"
                    defaultValue={plannedHoliday.has_sanitary_products}
                  />
                  <CheckboxNative
                    name="has_foundation"
                    label="Podkład"
                    defaultValue={plannedHoliday.has_foundation}
                  />
                  <CheckboxNative
                    name="has_mascara"
                    label="Tusz do rzęs"
                    defaultValue={plannedHoliday.has_mascara}
                  />
                  <CheckboxNative
                    name="has_lipstick"
                    label="Szminka"
                    defaultValue={plannedHoliday.has_lipstick}
                  />
                  <CheckboxNative
                    name="has_micellar_water"
                    label="Płyn nicelarny"
                    defaultValue={plannedHoliday.has_micellar_water}
                  />
                  <CheckboxNative
                    name="has_cotton_pads"
                    label="Waciki"
                    defaultValue={plannedHoliday.has_cotton_pads}
                  />
                </AccordionDetails>
              </Accordion>

              <Accordion
                sx={{
                  backgroundColor: "#c7c7c7",
                }}
                className={utils.mb3}
              >
                <AccordionSummary
                  id="panel-header"
                  aria-controls="panel-content"
                  expandIcon={<ArrowDropDownIcon />}
                >
                  <h4>Elektronika</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <CheckboxNative
                    name="has_charger"
                    label="Ładowarka"
                    defaultValue={plannedHoliday.has_charger}
                  />
                  <CheckboxNative
                    name="has_powerbank"
                    label="Powerbank"
                    defaultValue={plannedHoliday.has_powerbank}
                  />
                  <CheckboxNative
                    name="has_headphones"
                    label="Słuchawki"
                    defaultValue={plannedHoliday.has_headphones}
                  />
                  <CheckboxNative
                    name="has_laptop"
                    label="Laptop"
                    defaultValue={plannedHoliday.has_laptop}
                  />
                  <CheckboxNative
                    name="has_tablet"
                    label="Tablet"
                    defaultValue={plannedHoliday.has_tablet}
                  />
                  <CheckboxNative
                    name="has_camera"
                    label="Aparat"
                    defaultValue={plannedHoliday.has_camera}
                  />
                  <CheckboxNative
                    name="has_watch"
                    label="Zegarek"
                    defaultValue={plannedHoliday.has_watch}
                  />
                </AccordionDetails>
              </Accordion>

              <Accordion
                sx={{
                  backgroundColor: "#c7c7c7",
                }}
                className={utils.mb3}
              >
                <AccordionSummary
                  id="panel-header"
                  aria-controls="panel-content"
                  expandIcon={<ArrowDropDownIcon />}
                >
                  <h4>Apteczka</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <CheckboxNative
                    name="has_painkillers"
                    label="Leki przeciwbólowe"
                    defaultValue={plannedHoliday.has_painkillers}
                  />
                  <CheckboxNative
                    name="has_bandages"
                    label="Opatrunki"
                    defaultValue={plannedHoliday.has_bandages}
                  />
                  <CheckboxNative
                    name="has_insect_spray"
                    label="Spray na owady"
                    defaultValue={plannedHoliday.has_insect_spray}
                  />
                </AccordionDetails>
              </Accordion>

              <Accordion
                sx={{
                  backgroundColor: "#c7c7c7",
                }}
                className={utils.mb3}
              >
                <AccordionSummary
                  id="panel-header"
                  aria-controls="panel-content"
                  expandIcon={<ArrowDropDownIcon />}
                >
                  <h4>Akcesoria podróżne</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <CheckboxNative
                    name="has_bag"
                    label="Torba"
                    defaultValue={plannedHoliday.has_bag}
                  />
                  <CheckboxNative
                    name="has_backpack"
                    label="Plecak"
                    defaultValue={plannedHoliday.has_backpack}
                  />
                  <CheckboxNative
                    name="has_sunglasses"
                    label="Okulary przeciwsłoneczne"
                    defaultValue={plannedHoliday.has_sunglasses}
                  />
                  <CheckboxNative
                    name="has_water_bottle"
                    label="Bidon"
                    defaultValue={plannedHoliday.has_water_bottle}
                  />
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>

          <Accordion className={classes.section}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              id="panel-header"
              aria-controls="panel-content"
            >
              <h4>4/9 - Transport</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className={classes.sectionDescription}>
                Zakładka Transport umożliwia zaplanowanie wszystkich środków
                transportu na Twojej podróży. Możesz tu dodać szczegóły
                dotyczące biletów lotniczych, pociągowych, autobusowych oraz
                wynajmu samochodu, aby mieć pełen przegląd podróży. Dzięki temu
                łatwiej zorganizujesz swoje przejazdy i upewnisz się, że niczego
                nie przeoczysz.
              </p>
              <TextareaNative
                label="Samolot"
                name="plane"
                defaultValue={plannedHoliday.plane}
              />
              <TextareaNative
                label="Wynajem auta"
                name="car_rental"
                defaultValue={plannedHoliday.car_rental}
              />
              <TextareaNative
                label="Taxi/Uber"
                name="taxi_uber"
                defaultValue={plannedHoliday.taxi_uber}
              />
              <TextareaNative
                label="Pociągi"
                name="trains"
                defaultValue={plannedHoliday.trains}
              />
              <TextareaNative
                label="Autobusy"
                name="buses"
                defaultValue={plannedHoliday.buses}
              />
              <TextareaNative
                label="Tramwaje"
                name="trams"
                defaultValue={plannedHoliday.trams}
              />
              <TextareaNative
                label="Statki"
                name="ships"
                defaultValue={plannedHoliday.ships}
              />
              <TextareaNative
                label="Inne"
                name="other_transport"
                defaultValue={plannedHoliday.other_transport}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion className={classes.section}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              id="panel-header"
              aria-controls="panel-content"
            >
              <h4>5/9 - Zakwaterowanie</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className={classes.sectionDescription}>
                Zakładka Zakwaterowanie pomoże Ci w pełni zorganizować
                informacje dotyczące miejsca, w którym będziesz nocować.
                Znajdziesz tutaj szczegóły dotyczące hotelu, takie jak jego
                funkcje, dostępne atrakcje oraz opis, który pozwoli Ci lepiej
                poznać to miejsce. Dodatkowo, możesz zaplanować transport z
                lotniska do hotelu oraz zapisać godziny zameldowania i
                wymeldowania, aby nie przegapić żadnych istotnych terminów.
                Dzięki tej sekcji będziesz miał wszystkie ważne informacje o
                zakwaterowaniu w jednym miejscu, co ułatwi Ci organizację
                pobytu.
              </p>
              <div className={classes.sectionHotelImage}>
                <Image
                  alt="holiday card"
                  src={plannedHoliday.hotel_image}
                  sizes="100%"
                  priority
                  fill
                />
              </div>
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
              <div className={utils.my4}>
                <strong>Opis hotelu:</strong>
                <p className={utils.mt1}>{plannedHoliday.hotel_description}</p>
              </div>

              <TextareaNative
                label="Transport lotnisko > hotel"
                name="airport_to_hotel_transport"
                defaultValue={plannedHoliday.airport_to_hotel_transport}
              />
              <TextareaNative
                label="Transport hotel > lotnisko"
                name="hotel_to_airport_transport"
                defaultValue={plannedHoliday.hotel_to_airport_transport}
              />
              <InputNative
                label="Godzina zameldowania"
                type="time"
                name="check_in_time"
                defaultValue={plannedHoliday.check_in_time}
              />
              <InputNative
                label="Godzina wymeldowania"
                type="time"
                name="check_out_time"
                defaultValue={plannedHoliday.check_out_time}
              />
              <TextareaNative
                label="Notatki związane z zakwaterowaniem"
                name="accommodation_notes"
                defaultValue={plannedHoliday.accommodation_notes}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion className={classes.section}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              id="panel-header"
              aria-controls="panel-content"
            >
              <h4>6/9 - Atrakcje</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className={classes.sectionDescription}>
                Zakładka Atrakcje pozwoli Ci zaplanować i śledzić wszystkie
                miejsca, które chcesz odwiedzić podczas swojej podróży. Możesz
                tu zapisać najciekawsze atrakcje turystyczne, muzea, parki,
                zabytki czy wydarzenia, które zamierzasz zobaczyć. Dzięki tej
                sekcji łatwiej zorganizujesz swój czas i upewnisz się, że nie
                przegapisz żadnej wyjątkowej okazji do odkrywania lokalnych
                atrakcji. Możesz również dodać notatki o godzinach otwarcia,
                biletach, czy szczególnych wymaganiach, aby każda wizyta była
                dobrze zaplanowana.
              </p>
              <TextareaNative
                label="Atrakcje"
                name="attractions"
                defaultValue={plannedHoliday.attractions}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion className={classes.section}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              id="panel-header"
              aria-controls="panel-content"
            >
              <h4>7/9 - Jedzenie</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className={classes.sectionDescription}>
                Zakładka Jedzenie to miejsce, w którym możesz zapoznać się z tym
                jakie opcje wyżywienia są dostępne w Twojej wycieczce. Możesz
                przykładowo sprawdzić, czy Twoja wycieczka oferuje wyżywienie
                all inclusive oraz w jakich godzinach serwowane jest hotelowe
                śniadanie. Ponadto, możesz także zanotować restaruacje, które
                chcesz odwiedzić podczas pobytu.
              </p>
              <p>
                <Image
                  className={classes.holidayDetails__icon}
                  alt="holiday card food"
                  src={forkAndKnifeIcon}
                />
                {plannedHoliday.food}
              </p>
              <p className={utils.my4}>{plannedHoliday.food_details}</p>

              <TextareaNative
                label="Restauracje"
                name="restaurants"
                defaultValue={plannedHoliday.restaurants}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion className={classes.section}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              id="panel-header"
              aria-controls="panel-content"
            >
              <h4>8/9 - Podczas mojej podróży</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className={classes.sectionDescription}>
                Zakładka Podczas mojej podróży to miejsce, w którym możesz
                zaplanować, co zobaczysz, zrobisz, spróbujesz i posmakujesz
                podczas swojego wyjazdu. Zapisz atrakcje turystyczne, które
                chcesz odwiedzić, aktywności, które zamierzasz wypróbować, oraz
                lokalne potrawy i napoje, które chcesz spróbować. To doskonałe
                miejsce, aby stworzyć opis niezapomnianych doświadczeń i upewnić
                się, że żadna wyjątkowa okazja nie umknie Ci w trakcie podróży.
              </p>
              <TextareaNative
                label="Zobaczę"
                name="will_see"
                defaultValue={plannedHoliday.will_see}
              />
              <TextareaNative
                label="Posmakuję"
                name="will_taste"
                defaultValue={plannedHoliday.will_taste}
              />
              <TextareaNative
                label="Zrobię"
                name="will_do"
                defaultValue={plannedHoliday.will_do}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion className={classes.section}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              id="panel-header"
              aria-controls="panel-content"
            >
              <h4>9/9 - Pozostałe notatki</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className={classes.sectionDescription}>
                W tym miejscu możesz zapisać wszelkie inne cenne informacje.
              </p>
              <TextareaNative
                label="Pozostałe notatki"
                name="general_notes"
                defaultValue={plannedHoliday.general_notes}
              />
            </AccordionDetails>
          </Accordion>

          <div className={classes.buttons}>
            <Button
              text="Wyczyść"
              hasFixedWidth
              width="Lg"
              type="reset"
              color="Red"
              additionalClasses={utils.mr2}
            />
            <Button
              text="Zapisz"
              hasFixedWidth
              width="Lg"
              type="submit"
              color="Yellow"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default HolidayPlanner;
