"use client";

import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { useActionState, useState } from "react";
import classes from "./page.module.scss";
import utils from "@/app/utils.module.scss";
import { signup } from "@/actions/auth-actions";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const [formState, formAction] = useActionState(signup, null);

  return (
    <div className={classes.registerPage}>
      <div className={classes.registerPage__card}>
        <form action={formAction}>
          <h3 className={utils.mb5}>Zarejestruj się</h3>
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
          <Input
            placeholder="Powtórz hasło"
            type="password"
            name="repeatedPassword"
            id="repeatedPassword"
            labelText="Hasło"
            value={repeatedPassword}
            setState={setRepeatedPassword}
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
            text="Zarejestruj"
            type="submit"
            color="Yellow"
            isDisabled={false}
          />
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
