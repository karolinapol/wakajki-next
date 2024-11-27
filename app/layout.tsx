import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import type { Metadata } from "next";

import "./globals.scss";

import { Roboto } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import LogButton from "@/components/log-button/log-button";
import {
  CartCustomersContextProvider,
  CartItemContextProvider,
} from "@/contexts";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wakajki.pl",
  description: "Aplikacja do rezerwacji i planowania wycieczek w jednym.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartItemContextProvider>
      <CartCustomersContextProvider>
        <html lang="en" className={roboto.className}>
          <body>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>
                <Navbar>
                  <LogButton />
                </Navbar>
                <main>{children}</main>
              </ThemeProvider>
            </AppRouterCacheProvider>
          </body>
        </html>
      </CartCustomersContextProvider>
    </CartItemContextProvider>
  );
}
