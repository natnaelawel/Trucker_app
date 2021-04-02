import "nprogress/nprogress.css";
import "react-phone-input-2/lib/material.css";
import "swiper/swiper.scss"

import "../styles/globals.scss";
import dynamic from "next/dynamic";
import Head from "next/head";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressbar");
  },
  { ssr: false }
);

const theme = createMuiTheme({
  overrides: {
    MuiAppBar:{
      root:{
      }, 
      
    },
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "#20cccc",
          // "&:hover": {
          //   backgroundColor: "orange",
          // },
        },
      },
      // button: {
      //   "&:hover": {
      //     backgroundColor: "yellow",
      //   },
      // },
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
    divider: "#333",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <TopProgressBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
