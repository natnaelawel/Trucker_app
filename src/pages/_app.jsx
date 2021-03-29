import "../styles/globals.scss";
import dynamic from "next/dynamic";
import "nprogress/nprogress.css";
import Head from "next/head";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
// import "react-phone-input-2/lib/material.css";
import "react-phone-input-2/lib/material.css";

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressbar");
  },
  { ssr: false }
);

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#00ffdd",
      main: "#00ffdd",
    },
    secondary: {
      main: "#999",
    },
    text: {
      primary:"#111111",
      secondary: "#999",
    },
    divider: "#333"
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
