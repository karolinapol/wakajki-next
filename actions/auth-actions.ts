"use server";

import { createAuthSession, destroySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import createUser, { getUserByEmail } from "@/lib/user";
import { redirect } from "next/navigation";

export type AuthActionErrors = {
  email: string;
  password: string;
  repeatedPassword: string;
};

export async function signup(_prevState: unknown, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const repeatedPassword = formData.get("repeatedPassword") as string;

  const errors: AuthActionErrors = {
    email: "",
    password: "",
    repeatedPassword: "",
  };

  if (!email.includes("@")) {
    errors.email = "Wprowadź poprawny adres email";
  }

  if (password.trim().length < 8) {
    errors.password = "Hasło powinno mieć minimum 8 znaków";
  }

  if (password !== repeatedPassword) {
    errors.repeatedPassword = "Hasła nie są takie same";
  }

  if (Object.values(errors).some((value) => value !== "")) {
    return {
      errors,
    };
  }

  const hashedPassword = hashUserPassword(password);

  try {
    createUser(email, hashedPassword);
    redirect("/login");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          email: "Konto dla podanego adresu email już istnieje.",
        },
      };
    }
    throw error;
  }
}

export async function signin(_prevState: unknown, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const existingUser = getUserByEmail(email);

  if (!existingUser) {
    return {
      errors: {
        email: "Brak użytkownika o podanym adresie email.",
      },
    };
  }

  const isValidPassword = verifyPassword(existingUser.password, password);

  if (!isValidPassword) {
    return {
      errors: {
        email: "Błędne hasło.",
      },
    };
  }

  await createAuthSession(existingUser.id);
  return { userId: existingUser.id, signedInSuccessfully: true };
}

export async function signout() {
  await destroySession();
  redirect("/login");
}
