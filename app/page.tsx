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
                Wszystko w jednym. Super apka umie to i to. <br></br> Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
                urna sed tellus laoreet venenatis. Proin imperdiet et mauris non
                auctor. Nunc accumsan lorem varius, volutpat ex a, imperdiet
                justo. Nulla venenatis mauris pharetra lacus egestas tristique.
                Phasellus varius nibh lobortis iaculis rhoncus. Sed pulvinar sed
                nulla non tempus. Aenean viverra ipsum in eros faucibus, eget
                pellentesque est lobortis. Vestibulum ex velit, vulputate vel
                quam sed, ultrices accumsan lacus. Ut in nunc elit. Fusce
                vehicula justo nisi, eu consequat lorem placerat at. Curabitur
                arcu nisi, gravida id sapien sit amet, posuere elementum enim.
                Etiam pulvinar vitae leo in semper. Donec pharetra, purus eu
                bibendum vehicula, libero est aliquam nulla, in ultricies quam
                lectus vitae leo. Aenean sed commodo tortor, at dignissim nulla.
                Curabitur eget quam non magna placerat finibus. Quisque sodales
                cursus nisi, id varius leo ullamcorper feugiat. Phasellus
                malesuada dapibus venenatis. Fusce viverra congue augue, sit
                amet porta erat ultrices a. Donec lobortis ante dolor, feugiat
                bibendum felis sagittis nec. Sed consequat diam in tortor
                vehicula, a congue nisl porttitor. Proin accumsan nunc eget
                gravida porta. Maecenas a dapibus est, et congue urna. Sed
                dapibus egestas velit ac facilisis. Cras in magna blandit,
                bibendum arcu et, dapibus ex. Nam.
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
                Fajne wycieczki mamy do ornety i wałbyrzycha też. <br></br>{" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ut urna sed tellus laoreet venenatis. Proin imperdiet
                et mauris non auctor. Nunc accumsan lorem varius, volutpat ex a,
                imperdiet justo. Nulla venenatis mauris pharetra lacus egestas
                tristique. Phasellus varius nibh lobortis iaculis rhoncus. Sed
                pulvinar sed nulla non tempus. Aenean viverra ipsum in eros
                faucibus, eget pellentesque est lobortis. Vestibulum ex velit,
                vulputate vel quam sed, ultrices accumsan lacus. Ut in nunc
                elit. Fusce vehicula justo nisi, eu consequat lorem placerat at.
                Curabitur arcu nisi, gravida id sapien sit amet, posuere
                elementum enim. Etiam pulvinar vitae leo in semper. Donec
                pharetra, purus eu bibendum vehicula, libero est aliquam nulla,
                in ultricies quam lectus vitae leo. Aenean sed commodo tortor,
                at dignissim nulla. Curabitur eget quam non magna placerat
                finibus. Quisque sodales cursus nisi, id varius leo ullamcorper
                feugiat. Phasellus malesuada dapibus venenatis. Fusce viverra
                congue augue, sit amet porta erat ultrices a. Donec lobortis
                ante dolor, feugiat bibendum felis sagittis nec. Sed consequat
                diam in tortor vehicula, a congue nisl porttitor. Proin accumsan
                nunc eget gravida porta. Maecenas a dapibus est, et congue urna.
                Sed dapibus egestas velit ac facilisis. Cras in magna blandit,
                bibendum arcu et, dapibus ex. Nam.
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
                Wybierz najtańszego wizzaiara albo rajanera jak się o swoje zęby
                przy lądowaniu nie boisz XD. <br></br> Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Maecenas ut urna sed tellus
                laoreet venenatis. Proin imperdiet et mauris non auctor. Nunc
                accumsan lorem varius, volutpat ex a, imperdiet justo. Nulla
                venenatis mauris pharetra lacus egestas tristique. Phasellus
                varius nibh lobortis iaculis rhoncus. Sed pulvinar sed nulla non
                tempus. Aenean viverra ipsum in eros faucibus, eget pellentesque
                est lobortis. Vestibulum ex velit, vulputate vel quam sed,
                ultrices accumsan lacus. Ut in nunc elit. Fusce vehicula justo
                nisi, eu consequat lorem placerat at. Curabitur arcu nisi,
                gravida id sapien sit amet, posuere elementum enim. Etiam
                pulvinar vitae leo in semper. Donec pharetra, purus eu bibendum
                vehicula, libero est aliquam nulla, in ultricies quam lectus
                vitae leo. Aenean sed commodo tortor, at dignissim nulla.
                Curabitur eget quam non magna placerat finibus. Quisque sodales
                cursus nisi, id varius leo ullamcorper feugiat. Phasellus
                malesuada dapibus venenatis. Fusce viverra congue augue, sit
                amet porta erat ultrices a. Donec lobortis ante dolor, feugiat
                bibendum felis sagittis nec. Sed consequat diam in tortor
                vehicula, a congue nisl porttitor. Proin accumsan nunc eget
                gravida porta. Maecenas a dapibus est, et congue urna. Sed
                dapibus egestas velit ac facilisis. Cras in magna blandit,
                bibendum arcu et, dapibus ex. Nam.
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
