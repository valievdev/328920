import { createTheme } from "@material-ui/core/styles";
import { alpha } from "@material-ui/core/styles/colorManipulator"

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    h4: {
      fontWeight: "600",
      fontSize: "1.8rem",
    },
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "600",
      fontSize: "1rem",
      margin: "auto",
      display: "inline-block",
      border: "none",
      background: "none",
      cursor: "pointer",
      padding: "0.5vh 1vw",
      textAlign: "center",
      color: "white",
      borderRadius: "4px"
    },
    subtitle1: {
      fontSize: "1rem",
      color: "#B0B0B0",
    },
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold",
      },
      underline : {
        "&:before": {
          borderBottomColor: "#D5DFED" 
        }
      }
    },
    MuiPaper: {
      elevation3 : {
        boxShadow: "-1px 5px 3px -2px rgba(0, 0, 0, 0.05),0px 3px 4px 0px rgba(0,0,0,0.05),0px 1px 8px 0px rgba(0,0,0,0.05)",
      }
    },
    MuiButton: {
      root: {
        borderRadius: 3
      },
      containedSizeSmall: {
        padding: "0 3.5vw"
      }
    }

  },
  palette: {
    primary: { 
      main: "#3A8DFF",
      overlayGradientStart: alpha("#70A7F4", 0.85),
      overlayGradientEnd: alpha("#2C7AE4", 0.85)
    }, 
    secondary: { main: "#B0B0B0" },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
});
