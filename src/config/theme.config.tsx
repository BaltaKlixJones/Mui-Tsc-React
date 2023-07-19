import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element;
};

export enum themePalette {
  BG = "#12181b",
  LIME = "#0a539c",
  FONT_GLOBAL = "'JetBrains MONO', monospace",
  // ALERT STYLES
  ERROR_MAIN = "#f44336",
  BG_ERROR_MAIN = "rgba(244,67,54,0.1)",
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: themePalette.BG,
    },
    primary: {
      main: themePalette.LIME,
    },
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "0.5em",
        },
      },
    },
    MuiAlert: {
      defaultProps: {
        style: {
          borderRadius: "0.8em",
          fontSize: "1em",
        },
      },
      styleOverrides: {
        standardError: {
          backgroundColor: themePalette.BG_ERROR_MAIN,
          color: themePalette.ERROR_MAIN,
          border: `1px solid ${themePalette.ERROR_MAIN}`,
        }
      }
    },
  },
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
