import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B39DDB", // Lavender
    },
    secondary: {
      main: "#FFFFFF",
    },
    background: {
      default: "#FAF8FC",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#3F3D56",
      secondary: "#6B6B7A",
    },
  },

  typography: {
    fontFamily: `"Playfair Display", "Roboto", serif`,
  },
});

export default theme;