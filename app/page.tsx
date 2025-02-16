import Link from "next/link";
import classes from "./page.module.scss";

export const HomePage = async () => {
  return (
    <div className={classes.homePage}>
      <div className={classes.mainBaner}>
        <div className="container">
          <div style={{ position: "relative" }} className="content">
            <h2 className={classes.mainBanerPrimaryText}>Wakajki.pl</h2>
            <h3 className={classes.mainBanerSecondaryText}>🗓️ ZAREZERWUJ...</h3>
            <h3 className={classes.mainBanerSecondaryText}>📝 ZAPLANUJ...</h3>
            <h3 className={classes.mainBanerSecondaryText}>✈️ LEĆ!</h3>
            <Link className={classes.mainBanerButton} href="/holidays">
              Przeglądaj wycieczki
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div className={classes.descriptionSectionLeftAligned}>
            <div className={classes.titleBox}>
              <h3>Co nas wyróżnia?</h3>
            </div>
            <div className={classes.descriptionBox}>
              <p>
                Wakajki.pl to serwis podróżniczy, który zapewnia niezapomniane wakacje dopasowane do Twoich marzeń. Wyróżnia nas indywidualne podejście do klienta, szeroka oferta wyjątkowych destynacji na całym świecie oraz konkurencyjne ceny, dzięki którym luksusowy wypoczynek staje się dostępny dla każdego. Gwarantujemy najwyższą jakość usług, współpracujemy wyłącznie ze sprawdzonymi hotelami i organizatorami, a nasze doświadczenie oraz pasja do podróży pozwalają nam tworzyć perfekcyjnie zaplanowane wyjazdy. Niezależnie od tego, czy marzysz o rajskich plażach, ekscytujących city breakach, rodzinnych wakacjach czy pełnych przygód wyprawach, u nas znajdziesz idealną ofertę. Dbamy o komfort i bezpieczeństwo naszych klientów, zapewniamy pełne wsparcie na każdym etapie podróży oraz doradzamy najlepsze rozwiązania, aby Twój wyjazd był bezproblemowy 
                i pełen niezapomnianych wrażeń. Wybierając Wakajki.pl, wybierasz profesjonalizm, pasję i najlepsze wakacje pod słońcem! 🌍✈️🏖️
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.bookBaner}>
        <h1>REZERWACJA</h1>
      </div>

      <div className="container">
        <div className="content">
          <div className={classes.descriptionSectionRightAligned}>
            <div className={classes.descriptionBox}>
              <p>
                Wakajki.pl to nowoczesny system rezerwacji, który umożliwia szybkie, wygodne i bezpieczne rezerwowanie wyjazdów 
                do najpopularniejszych destynacji na całym świecie, oferując szeroki wybór hoteli, pakietów wakacyjnych i opcji dodatkowych.
                Cały proces rezerwacji odbywa się online, bez zbędnych formalności i ukrytych kosztów z możliwością elastycznych form płatności, 
                rezerwacji last minute lub first minute oraz pełnym wsparciem naszego zespołu na każdym etapie organizacji wyjazdu, co gwarantuje bezpieczeństwo transakcji, przejrzystość warunków i najlepszą cenę na rynku.
              </p>
            </div>
            <div className={classes.titleBox}>
              <h3>
                Zarezerwuj wymarzoną wycieczkę w dowolne miejsce na świecie!
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.planBaner}>
        <h1>PLANOWANIE</h1>
      </div>

      <div className="container">
        <div className="content">
          <div className={classes.descriptionSectionLeftAligned}>
            <div className={classes.titleBox}>
              <h3>Zaplanuj swoją wymarzoną wycieczkę!</h3>
            </div>
            <div className={classes.descriptionBox}>
              <p>
                Z naszym planerem podróży zorganizujesz swoją wymarzoną wycieczkę, dostosowując każdy szczegół – od
                wyboru idealnej destynacji, przez hotel, opcje wyżywienia, aż po atrakcje, które sprawią, że Twój wyjazd będzie wyjątkowy. 
                Intuicyjny system pozwoli Ci w pełni kontrolować proces, zapewniając wygodę i elastyczność, by każda podróż była dokładnie taka, jak ją sobie wymarzyłeś.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.flyBaner}>
        <h1>WAKACJE!</h1>
      </div>
    </div>
  );
};

export default HomePage;
