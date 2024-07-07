// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    color: {
      brand: {
        5: "rgba(238, 242, 255, 1)",
        50: "rgb(93 85 231)",
        60: "rgba(79, 70, 229, 1)",
      },
      gray: {
        0: "rgba(255, 255, 255, 1)",
        10: "rgba(241, 245, 249, 1)",
        30: "rgba(203, 213, 225, 1)",
        60: "rgba(71, 85, 105, 1)",
        70: "rgba(51, 65, 85, 1)",
        80: "rgba(30, 41, 59, 1)",
      },
      purple: {
        30: "rgba(216, 180, 254, 1)",
        70: "rgba(126, 34, 206, 1)",
      },
      destructive: {
        30: "rgba(253, 164, 175, 1)",
        50: "rgba(244, 63, 94, 1)",
        90: "rgba(136, 19, 55, 1)",
      },
      success: {
        50: "rgba(34, 197, 94, 1)",
      },
    },
    fontFamily: {
      jakarta: '"Plus Jakarta Sans", sans-serif',
    },
    fontWeight: {
      default: {
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
      },
    },
  },
});

export default theme;
