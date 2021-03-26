import '../styles/globals.scss'
import dynamic from 'next/dynamic'
import "nprogress/nprogress.css";
import Head from 'next/head';

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressbar");
  },
  { ssr: false }
);


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <TopProgressBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
