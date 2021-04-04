import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  overrides: {
    MuiDivider: {
      root: {
        margin: "5px 0",
      },
    },
    MuiAppBar: {
      root: {},
    },
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "#20cccc",
        },
      },
    },
  },
  palette: {
    primary: {
      light: "#20cccc",
      main: "#20cccc",
    },
    secondary: {
      main: "#999",
    },
    text: {
      primary: "#111111",
      secondary: "#999",
    },
    error: {
      main: "#cc0000",
    },
    background: {
      default: "#eee",
    },
    grey: {
      600: "#aaa",
    },
  },
});

export default theme;