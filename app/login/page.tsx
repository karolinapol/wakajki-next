"use client";

import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { useActionState, useEffect, useState } from "react";
import classes from "./page.module.scss";
import utils from "@/app/utils.module.scss";
import Link from "next/link";
import { signin } from "@/actions/auth-actions";
import { useRouter } from "next/navigation";
import { useCartItemContext } from "@/contexts";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUserId } = useCartItemContext();

  const router = useRouter();

  const [formState, formAction] = useActionState(signin, null);

  useEffect(() => {
    if (formState?.signedInSuccessfully === true) {
      router.push("/holidays");
    }

    if (formState?.userId) {
      setUserId(formState.userId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState]);

  return (
    <div className={classes.loginPage}>
      <div className={classes.loginPage__card}>
        <form action={formAction}>
          <h3 className={utils.mb5}>Zaloguj się</h3>
          <Input
            placeholder="Wprowadź email"
            name="email"
            id="email"
            value={email}
            labelText="Email"
            setState={setEmail}
            additionalClasses={utils.mb3}
            required={true}
            size="Lg"
            type="email"
          />
          <Input
            placeholder="Wprowadź hasło"
            type="password"
            name="password"
            id="password"
            labelText="Hasło"
            value={password}
            setState={setPassword}
            additionalClasses={utils.mb3}
            required={true}
            size="Lg"
          />

          {formState && formState.errors && (
            <ul className={classes.validationMessage}>
              {Object.keys(formState.errors)
                .filter(
                  (error) =>
                    formState.errors[error as keyof typeof formState.errors] !==
                    ""
                )
                .map((error) => (
                  <li key={error}>
                    - {formState.errors[error as keyof typeof formState.errors]}
                  </li>
                ))}
            </ul>
          )}

          <Button
            additionalClasses={utils.mt6}
            text="Zaloguj"
            type="submit"
            color="Yellow"
            isDisabled={false}
          />

          <div className={utils.mt3}>
            <Link href="/register">Utwórz nowe konto</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
