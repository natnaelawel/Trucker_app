import { Link } from "@material-ui/core";
import Head from "next/head";
import Styles from "./Custom404.module.scss";

function Custom404() {
  return (
    <div className={Styles.notfoundmain}>
      <Head>
        <title>404 Trucker App</title>
        <link
          href="https://fonts.googleapis.com/css?family=Fredoka+One"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,700"
          rel="stylesheet"
        />
      </Head>
      <div className={Styles.notfound}>
        <div className={Styles.notfound404}>
          <h1>404</h1>
        </div>
        <h2>Oops, The Page you are looking for can't be found!</h2>
        <Link href="/">
          <a>
            <span className={Styles.returnarrow}></span>Return To Homepage
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Custom404;
