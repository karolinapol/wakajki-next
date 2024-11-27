import { verifyAuth } from "@/lib/auth";
import classes from "./log-button.module.scss";
import Image from "next/image";
import Link from "next/link";
import { signout } from "@/actions/auth-actions";

export const LogButton = async () => {
  const result = await verifyAuth();

  // user logged in
  if (result.user) {
    return (
      <form action={signout}>
        <button type="submit" className={classes.logButton}>
          <Image
            src="/icons/logout.svg"
            className={classes.logButtonIcon}
            alt="log out"
            width={20}
            height={20}
          />
          <span>Wyloguj</span>
        </button>
      </form>
    );
  }

  // user not logged in
  else {
    return (
      <div className={classes.logButton}>
        <Image
          src="/icons/logout.svg"
          className={classes.logButtonIcon}
          alt="log out"
          width={20}
          height={20}
        />
        <Link href="/login">Zaloguj</Link>
      </div>
    );
  }
};

export default LogButton;
