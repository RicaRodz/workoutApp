import { createTheme } from "@rneui/themed";
// themes.ts
const theme = createTheme({
  lightColors: {
    background: "#94D2BD", // view background
    primary: "#EE9B00", // orange as main accent
    secondary: "#CA6702", // border color as secondary
    white: "#FFFFFF", // keep standard
    black: "#001219", // your dark text color
    grey0: "#E9D8A6", // muted background
    divider: "#CA6702", // border also works here
    success: "#0a9396",
    error: "#AE2012",
    warning: "#BB3E03",
  },
  darkColors: {
    background: "#001219",
    primary: "#0a9396",
    secondary: "#0a9396", // turquoise border
    white: "#E9D8A6", // soft yellow text
    black: "#000000",
    grey0: "#005F73",
    divider: "#0a9396",
    success: "#94D2BD",
    error: "#9B2226",
    warning: "#CA6702",
  },
  mode: 'light', 
  components: {
  },
});

export default theme;