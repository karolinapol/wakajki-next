"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  palette: {
    background: {
      paper: "#f6f6f6",
    },
    text: {
      primary: "black",
      secondary: "black",
    },
    action: {
      active: "#46505A",
    },
  },
});

export default theme;
