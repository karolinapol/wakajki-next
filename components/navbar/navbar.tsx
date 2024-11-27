"use client";

import Link from "next/link";
import classes from "./navbar.module.scss";
import utils from "@/app/utils.module.scss";
import Image from "next/image";
import Logo from "../logo/logo";
import { usePathname } from "next/navigation";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { PropsWithChildren, useState } from "react";

export const Navbar = ({ children }: PropsWithChildren): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { width } = useWindowDimensions();

  return (
    <>
      <nav className="container">
        <div className={`content ${classes.navbar}`}>
          <Link className={classes.navbar__logo} href="/">
            <Logo />
          </Link>

          {width && width > 768 ? (
            <div className={classes.navbar__items}>
              <div className={classes.navbar__itemsLeft}>
                <div className={`${classes.navbar__item} ${utils.mr4}`}>
                  <Link
                    className={
                      pathname === "/" ? classes.navbar__itemActive : ""
                    }
                    href="/"
                  >
                    Strona główna
                  </Link>
                </div>
                <div className={`${classes.navbar__item} ${utils.mr4}`}>
                  <Link
                    className={
                      pathname === "/holidays" ? classes.navbar__itemActive : ""
                    }
                    href="/holidays"
                  >
                    Zarezerwuj wycieczkę
                  </Link>
                </div>
                <div className={classes.navbar__item}>
                  <Link
                    className={
                      pathname === "/booked-holidays"
                        ? classes.navbar__itemActive
                        : ""
                    }
                    href="/booked-holidays"
                  >
                    Moje wycieczki
                  </Link>
                </div>
              </div>

              <div className={classes.navbar__itemsRight}>
                <div
                  className={`${classes.navbar__item} ${classes.navbar__itemWithIcon} ${utils.mr4}`}
                >
                  <Image
                    src="/icons/cart.svg"
                    className={classes.navbar__itemIcon}
                    alt="holiday basket"
                    width={20}
                    height={20}
                  />
                  <Link
                    className={
                      pathname === "/cart" ? classes.navbar__itemActive : ""
                    }
                    href="/cart"
                  >
                    Koszyk
                  </Link>
                </div>
                {children}
              </div>
            </div>
          ) : (
            // mobile menu toggle
            <Image
              src="/icons/hamburger-menu-icon.svg"
              className={classes.navbar__menuIcon}
              alt="holiday basket"
              width={25}
              height={25}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          )}
        </div>
      </nav>

      {/* mobile menu open */}
      {width && width <= 768 && isMobileMenuOpen && (
        <div className={classes.mobileMenu}>
          <div className={`${classes.navbar__item} ${utils.mb3}`}>
            <Link
              className={pathname === "/" ? classes.navbar__itemActive : ""}
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Strona główna
            </Link>
          </div>
          <div className={`${classes.navbar__item} ${utils.mb3}`}>
            <Link
              className={
                pathname === "/holidays" ? classes.navbar__itemActive : ""
              }
              href="/holidays"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Zarezerwuj wycieczkę
            </Link>
          </div>
          <div className={`${classes.navbar__item} ${utils.mb3}`}>
            <Link
              className={
                pathname === "/booked-holidays"
                  ? classes.navbar__itemActive
                  : ""
              }
              href="/booked-holidays"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Moje wycieczki
            </Link>
          </div>
          <div
            className={`${classes.navbar__item} ${classes.navbar__itemWithIcon} ${utils.mb3}`}
          >
            <Image
              src="/icons/cart.svg"
              className={classes.navbar__itemIcon}
              alt="holiday basket"
              width={20}
              height={20}
            />
            <Link
              className={pathname === "/cart" ? classes.navbar__itemActive : ""}
              href="/cart"
            >
              Koszyk
            </Link>
          </div>
          {children}
        </div>
      )}
    </>
  );
};

export default Navbar;
