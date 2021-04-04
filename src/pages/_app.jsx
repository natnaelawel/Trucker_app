import React, { useEffect } from "react";
import "nprogress/nprogress.css";
import "react-phone-input-2/lib/material.css";
import "swiper/swiper.scss";

import "../styles/globals.scss";
import dynamic from "next/dynamic";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core";
import theme from "../utils/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressbar");
  },
  { ssr: false }
);
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <TopProgressBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
