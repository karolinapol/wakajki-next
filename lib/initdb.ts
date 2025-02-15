// eslint-disable-next-line @typescript-eslint/no-require-imports
const sql = require("better-sqlite3");
const db = sql("holidays.db");

const holidays = [
  {
    // base
    image: "/images/maldives.jpg",
    slug: "maldives",
    country: "Malediwy",
    city: "Raa Atol",
    hotel_name: "You & Me by Cocoon Maldives",
    date: "22.11.2024 - 30.11.2024",
    departure_city: "Gdańsk",
    arrival_city: "Dubaj",
    food: "All Inclusive",
    rating: "5",
    price: 8999,
    // details
    hotel_features: "suszarka, żelazko, zmywarka",
    hotel_attractions: "prywatna plaża, snorkeling, zachody słońca nad laguną",
    hotel_image: "/images/maldives-hotel.jpg",
    holiday_description:
      "Ekskluzywny wypoczynek na rajskich Malediwach, gdzie turkusowa woda i biały piasek tworzą idealne warunki do relaksu. Spędź dni na plaży, odkrywaj podwodne życie i ciesz się egzotyczną atmosferą.",
    hotel_description:
      "Luksusowa willa na wodzie, zapewniająca prywatność i niepowtarzalne widoki na ocean. Idealne miejsce na romantyczny wyjazd lub błogi odpoczynek z dala od zgiełku.",
    food_details:
      "Bogata kuchnia Malediwów – świeże owoce morza, tropikalne owoce i wykwintne kolacje przy zachodzie słońca.",
  },
  {
    image: "/images/bali.jpg",
    slug: "bali",
    country: "Indonezja",
    city: "Ubud",
    hotel_name: "Bali Paradise Resort",
    date: "10.07.2024 - 20.07.2024",
    departure_city: "Warszawa",
    arrival_city: "Denpasar",
    food: "Half Board",
    rating: "4",
    price: 4899,
    hotel_features: "klimatyzacja, sejf, prywatny balkon z widokiem na dżunglę",
    hotel_attractions: "basen infinity, codzienne sesje jogi, balijskie masaże",
    hotel_image: "/images/baliHotel.jpg",
    holiday_description: 
      "Oaza spokoju w sercu tropikalnej dżungli. Malownicze tarasy ryżowe, mistyczne świątynie i niesamowita kultura Bali. Idealne miejsce na odprężenie i odnalezienie harmonii.",
    hotel_description: 
      "Elegancki resort w otoczeniu bujnej przyrody, gdzie każdy poranek rozpoczyna się śpiewem egzotycznych ptaków, a dni mijają na relaksie przy basenie i eksplorowaniu wyspy.",
    food_details: 
      "Tradycyjne balijskie dania – aromatyczne curry, świeże owoce morza oraz egzotyczne owoce podawane prosto z lokalnych plantacji.",
  },
  {
    image: "/images/paris.jpg",
    slug: "paris",
    country: "Francja",
    city: "Paryż",
    hotel_name: "Louvre Boutique Hotel",
    date: "15.08.2024 - 22.08.2024",
    departure_city: "Kraków",
    arrival_city: "Paryż",
    food: "Bed & Breakfast",
    rating: "5",
    price: 3599,
    hotel_features: "ekspres do kawy, minibar, widok na wieżę Eiffla",
    hotel_attractions: "muzea, kawiarnie, romantyczne spacery nad Sekwaną",
    hotel_image: "/images/parisHotel.jpg",
    holiday_description: 
      "Paryż – miasto miłości, sztuki i wyrafinowanego smaku. Zanurz się w świecie elegancji, odwiedź Luwr, delektuj się croissantem w uroczej kawiarni i podziwiaj zachód słońca spod Wieży Eiffla.",
    hotel_description: 
      "Stylowy hotel w samym sercu Paryża, gdzie klasyczna francuska elegancja łączy się z nowoczesnym komfortem. Idealne miejsce na romantyczny pobyt.",
    food_details: 
      "Autentyczne francuskie śniadania – chrupiące bagietki, świeże croissanty, sery i aromatyczna kawa, wszystko serwowane z widokiem na malownicze uliczki miasta.",
  },
  {
    image: "/images/rome.jpg",
    slug: "rome",
    country: "Włochy",
    city: "Rzym",
    hotel_name: "Colosseum Grand Hotel",
    date: "05.09.2024 - 12.09.2024",
    departure_city: "Wrocław",
    arrival_city: "Rzym",
    food: "All Inclusive",
    rating: "4",
    price: 2999,
    hotel_features: "TV, klimatyzacja, prywatny taras",
    hotel_attractions: "Koloseum, Fontanna di Trevi, Watykan",
    hotel_image: "/images/romeHotel.jpg",
    holiday_description: 
      "Wieczne Miasto, gdzie historia spotyka się z nowoczesnością. Spacerując ulicami Rzymu, odkryjesz monumentalne zabytki, urocze trattorie i niepowtarzalny włoski klimat.",
    hotel_description: 
      "Elegancki hotel w historycznym centrum, skąd w kilka minut dojdziesz do najsłynniejszych atrakcji Rzymu. Komfort i luksus w najlepszym włoskim stylu.",
    food_details: 
      "Bogate włoskie menu – autentyczna pizza neapolitańska, świeże pasty i tiramisu przygotowane według tradycyjnych receptur.",
  },
  {
    image: "/images/lasVegas.jpg",
    slug: "las-vegas",
    country: "USA",
    city: "Las Vegas",
    hotel_name: "The Strip Luxury Hotel",
    date: "10.10.2024 - 18.10.2024",
    departure_city: "Wrocław",
    arrival_city: "Las Vegas",
    food: "All Inclusive",
    rating: "5",
    price: 7599,
    hotel_features: "kasyno, basen na dachu, teatr",
    hotel_attractions: "Kasyna, Grand Canyon, Bellagio Fountain",
    hotel_image: "/images/lasVegasHotel.jpg",
    holiday_description:
      "Las Vegas – stolica rozrywki, gdzie wszystko jest możliwe! Kasyna, luksusowe hotele, pokazy na światowym poziomie i niepowtarzalna atmosfera.",
    hotel_description:
      "Ekskluzywny hotel w samym sercu The Strip, z dostępem do najlepszych atrakcji i nocnych rozrywek.",
    food_details:
      "Od steków premium po wykwintne sushi – Vegas to kulinarna podróż pełna luksusu.",
  },
  {
    image: "/images/miami.jpg",
    slug: "miami",
    country: "USA",
    city: "Miami",
    hotel_name: "South Beach Paradise",
    date: "22.08.2024 - 30.08.2024",
    departure_city: "Gdańsk",
    arrival_city: "Miami",
    food: "Half Board",
    rating: "5",
    price: 6799,
    hotel_features: "basen, widok na ocean, prywatna plaża",
    hotel_attractions: "South Beach, Wynwood, rejsy po zatoce",
    hotel_image: "/images/miamiHotel.jpg",
    holiday_description:
      "Miami – miejsce, gdzie tropikalny klimat łączy się z energią wielkiego miasta. Słońce, latynoska muzyka i najlepsze imprezy na plaży!",
    hotel_description:
      "Elegancki hotel przy słynnej South Beach, gdzie dzień zaczynasz od kąpieli w oceanie, a kończysz w najlepszych klubach miasta.",
    food_details:
      "Kuchnia inspirowana Karaibami – świeże owoce morza, ceviche i orzeźwiające mojito.",
  },
  {
    image: "/images/hawaii.jpg",
    slug: "hawaii",
    country: "USA",
    city: "Honolulu",
    hotel_name: "Waikiki Beach Resort",
    date: "05.07.2024 - 15.07.2024",
    departure_city: "Berlin",
    arrival_city: "Honolulu",
    food: "All Inclusive",
    rating: "5",
    price: 8999,
    hotel_features: "prywatna plaża, basen infinity, spa",
    hotel_attractions: "Waikiki Beach, wulkan Diamond Head, nurkowanie z żółwiami",
    hotel_image: "/images/hawaiiHotel.jpg",
    holiday_description:
      "Hawaje to raj na ziemi – krystalicznie czysta woda, rajskie plaże i tropikalna natura. Idealne miejsce na relaks, surfing i niezapomniane przygody.",
    hotel_description:
      "Luksusowy resort przy samej plaży, gdzie każdy poranek zaczyna się szumem oceanu i zapachem egzotycznych kwiatów.",
    food_details:
      "Lokalne przysmaki – poke bowl, świeże ananasy i koktajle serwowane prosto na plaży.",
  },
  {
    image: "/images/tokyo.jpg",
    slug: "tokyo",
    country: "Japonia",
    city: "Tokio",
    hotel_name: "Shinjuku Sky Hotel",
    date: "12.10.2024 - 22.10.2024",
    departure_city: "Gdańsk",
    arrival_city: "Tokio",
    food: "Room Only",
    rating: "5",
    price: 6999,
    hotel_features: "smart TV, robot kelner, panoramiczny widok na miasto",
    hotel_attractions: "Akihabara, świątynia Sensō-ji, nocne życie Shinjuku",
    hotel_image: "/images/tokyoHotel.jpg",
    holiday_description: 
      "Tokio to miasto kontrastów – futurystyczne drapacze chmur, neonowe ulice i tradycyjne świątynie. Odkryj fascynującą kulturę Japonii, delektując się lokalnymi przysmakami i nowoczesnymi technologiami.",
    hotel_description: 
      "Luksusowy hotel w samym sercu Tokio, oferujący nowoczesne udogodnienia i zapierające dech w piersiach widoki na metropolię. Idealny wybór dla miłośników miejskiego życia.",
    food_details: 
      "Kulinarna podróż po Japonii – wyśmienite sushi, ramen i matcha, a dla odważnych – legendarne pączki mochi i takoyaki.",
  },
  {
    // base
    image: "/images/dubai.jpg",
    slug: "dubai",
    country: "Zjednoczone Emiraty Arabskie",
    city: "Dubaj",
    hotel_name: "Rose Rayhaan Dubai",
    date: "16.08.2024 - 24.08.2024",
    departure_city: "Warszawa",
    arrival_city: "Dubaj",
    food: "All Inclusive",
    rating: "4",
    price: 1899,
    // details
    hotel_features: "suszarka, pralka, zmywarka, lodówka, klimatyzacja",
    hotel_attractions: "basen z widokiem na miasto, luksusowe SPA, rooftop bar",
    hotel_image: "/images/dubai-hotel.jpg",
    holiday_description:
      "Ekskluzywna podróż do serca luksusu! Dubaj to miejsce, gdzie nowoczesność łączy się z tradycją, a atrakcje takie jak Burj Khalifa, pustynne safari czy ekskluzywne zakupy czekają na Ciebie.",
    hotel_description:
      "Nowoczesny hotel w samym centrum Dubaju, oferujący komfortowe wnętrza, panoramiczne widoki na miasto i pełne udogodnienia dla wymagających gości.",
    food_details:
      "Wykwintne dania kuchni międzynarodowej – od świeżych owoców morza po aromatyczne dania arabskie. Spróbuj złotego cappuccino i deserów z szafranem!",
  },
  {
    // base
    image: "/images/london.jpg",
    slug: "london",
    country: "Wielka Brytania",
    city: "Londyn",
    hotel_name: "The Royal London Hotel",
    date: "10.10.2024 - 17.10.2024",
    departure_city: "Kraków",
    arrival_city: "Londyn",
    food: "Bed & Breakfast",
    rating: "4",
    price: 2599,
    // details
    hotel_features: "suszarka, ekspres do kawy, sejf, WiFi",
    hotel_attractions: "Big Ben, Tower Bridge, London Eye",
    hotel_image: "/images/londonHotel.jpg",
    holiday_description:
      "Londyn – tętniąca życiem stolica pełna historii, kultury i nowoczesności. Odkryj światowej klasy muzea, kultowe zabytki i klimatyczne puby.",
    hotel_description:
      "Stylowy hotel w samym sercu Londynu, blisko najważniejszych atrakcji i świetnych restauracji. Idealne miejsce na city break!",
    food_details:
      "Tradycyjne angielskie śniadanie, fish & chips, popołudniowa herbata i najlepsze pubowe burgery.",
  },
  {
    // base
    image: "/images/newYork.jpg",
    slug: "new-york",
    country: "USA",
    city: "Nowy Jork",
    hotel_name: "Times Square Grand Hotel",
    date: "15.09.2024 - 22.09.2024",
    departure_city: "Warszawa",
    arrival_city: "Nowy Jork",
    food: "Bed & Breakfast",
    rating: "5",
    price: 7999,
    // details
    hotel_features: "WiFi, klimatyzacja, minibar, siłownia",
    hotel_attractions: "Times Square, Central Park, Broadway, Empire State Building",
    hotel_image: "/images/newYorkHotel.jpg",
    holiday_description:
      "Nowy Jork – miasto, które nigdy nie śpi! Spaceruj po Central Parku, odkrywaj światowe muzea i poczuj energię Times Square. Niezapomniane wrażenia gwarantowane!",
    hotel_description:
      "Luksusowy hotel w sercu Manhattanu, zaledwie kilka minut od największych atrakcji. Nowoczesne wnętrza i spektakularne widoki na panoramę miasta.",
    food_details:
      "Amerykańskie klasyki – soczyste burgery, nowojorskie hot dogi, słynny cheesecake i aromatyczna kawa prosto z Brooklynu.",
  },
];

db.exec(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY,
  email TEXT UNIQUE,
  password TEXT
  )`);

db.exec(`CREATE TABLE IF NOT EXISTS sessions (
  id TEXT NOT NULL PRIMARY KEY,
  expires_at INTEGER NOT NULL,
  user_id TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
  )`);

db.exec(`
  CREATE TABLE IF NOT EXISTS holidays (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    country TEXT NOT NULL,
    city TEXT NOT NULL,
    hotel_name TEXT NOT NULL,
    date TEXT NOT NULL,
    departure_city TEXT NOT NULL,
    arrival_city TEXT NOT NULL,
    food TEXT NOT NULL,
    rating TEXT NOT NULL,
    price INTEGER NOT NULL,
    hotel_features TEXT NOT NULL,
    hotel_attractions TEXT NOT NULL,
    hotel_image TEXT NOT NULL,
    holiday_description TEXT NOT NULL,
    hotel_description TEXT NOT NULL,
    food_details TEXT NOT NULL
  )`);

db.exec(`
  CREATE TABLE IF NOT EXISTS booked_holidays (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    holiday_id INTEGER NOT NULL,
    planned_holiday_id INTEGER,
    booking_name TEXT NOT NULL,
    booking_surname TEXT NOT NULL,
    booking_email TEXT NOT NULL,
    booking_phone TEXT NOT NULL,
    holiday_members TEXT NOT NULL,
    total_price INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
    FOREIGN KEY (holiday_id) REFERENCES holidays(id)
    FOREIGN KEY (planned_holiday_id) REFERENCES planned_holidays(id)
  )`);

db.exec(`
  CREATE TABLE IF NOT EXISTS planned_holidays (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    booked_holiday_id INTEGER NOT NULL,
    main_budget INTEGER NULL,
    insurance_budget INTEGER NULL,
    shopping_budget INTEGER NULL,
    souvenirs_budget INTEGER NULL,
    activities_budget INTEGER NULL,
    food_budget INTEGER NULL,
    has_local_cash INTEGER NULL,
    has_visa INTEGER NULL,
    has_insurance INTEGER NULL,
    has_vaccinations INTEGER NULL,
    has_passport INTEGER NULL,
    has_id_card INTEGER NULL,
    has_tickets INTEGER NULL,
    has_travel_invitation INTEGER NULL,
    has_intl_driving_license INTEGER NULL,
    has_payment_card INTEGER NULL,
    has_tshirts INTEGER NULL,
    has_pants INTEGER NULL,
    has_underwear INTEGER NULL,
    has_shoes INTEGER NULL,
    has_jacket INTEGER NULL,
    has_raincoat INTEGER NULL,
    has_flip_flops INTEGER NULL,
    has_headwear INTEGER NULL,
    has_toothbrush INTEGER NULL,
    has_toothpaste INTEGER NULL,
    has_dental_floss INTEGER NULL,
    has_shampoo INTEGER NULL,
    has_conditioner INTEGER NULL,
    has_hair_mask INTEGER NULL,
    has_shower_gel INTEGER NULL,
    has_soap INTEGER NULL,
    has_deodorant INTEGER NULL,
    has_perfume INTEGER NULL,
    has_moisturizer INTEGER NULL,
    has_spf_cream INTEGER NULL,
    has_after_sun_cream INTEGER NULL,
    has_razor INTEGER NULL,
    has_shaving_foam INTEGER NULL,
    has_brush INTEGER NULL,
    has_hair_accessories INTEGER NULL,
    has_sanitary_products INTEGER NULL,
    has_foundation INTEGER NULL,
    has_mascara INTEGER NULL,
    has_lipstick INTEGER NULL,
    has_micellar_water INTEGER NULL,
    has_cotton_pads INTEGER NULL,
    has_charger INTEGER NULL,
    has_powerbank INTEGER NULL,
    has_headphones INTEGER NULL,
    has_laptop INTEGER NULL,
    has_tablet INTEGER NULL,
    has_camera INTEGER NULL,
    has_watch INTEGER NULL,
    has_painkillers INTEGER NULL,
    has_bandages INTEGER NULL,
    has_insect_spray INTEGER NULL,
    has_bag INTEGER NULL,
    has_backpack INTEGER NULL,
    has_sunglasses INTEGER NULL,
    has_water_bottle INTEGER NULL,
    plane TEXT NULL,
    car_rental TEXT NULL,
    taxi_uber TEXT NULL,
    trains TEXT NULL,
    buses TEXT NULL,
    trams TEXT NULL,
    ships TEXT NULL,
    other_transport TEXT NULL,
    airport_to_hotel_transport TEXT NULL,
    hotel_to_airport_transport TEXT NULL,
    check_in_time TEXT NULL,
    check_out_time TEXT NULL,
    accommodation_notes TEXT NULL,
    attractions TEXT NULL,
    restaurants TEXT NULL,
    will_see TEXT NULL,
    will_taste TEXT NULL,
    will_do TEXT NULL,
    general_notes TEXT NULL,
    FOREIGN KEY (booked_holiday_id) REFERENCES booked_holidays(id)
  )`);

async function initData() {
  const populateHolidays = db.prepare(`
    INSERT INTO holidays VALUES (
      null,
      @image,
      @slug,
      @country,
      @city,
      @hotel_name,
      @date,
      @departure_city,
      @arrival_city,
      @food,
      @rating,
      @price,
      @hotel_features,
      @hotel_attractions,
      @hotel_image,
      @holiday_description,
      @hotel_description,
      @food_details
    )
  `);

  for (const holiday of holidays) {
    populateHolidays.run(holiday);
  }
}

initData();
