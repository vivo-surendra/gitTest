import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import ButtonUsage from "./components/UI/Button/Button";
import Grid from "@mui/material/Grid";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";

const getTheme = (mode) =>
  createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
          },
        },
      },
    },

    palette: {
      mode,
      coral: {
        main: mode === "light" ? "#FF7F50" : "#FF4500",
        contrastText: mode === "light" ? "#fff" : "#000",
      },
      red: {
        main: mode === "light" ? "#003366" : "#ff0067",
        contrastText: "#fff",
      },
    },
  });

export default function App() {
  const [mode, setMode] = useState("light");

  // Recreate the theme when mode changes
  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />

      <Button
        onClick={toggleTheme}
        variant="outlined"
        sx={{ m: 2, zIndex: 99 }}
      >
        Toggle to {mode === "light" ? "Dark" : "Light"} Mode
      </Button>
      {/* <Loader /> */}
      <Grid container gap={2}>
        <ButtonUsage />
        <ButtonUsage />
        <ButtonUsage />
        <ButtonUsage />
      </Grid>
    </ThemeProvider>
  );
}
