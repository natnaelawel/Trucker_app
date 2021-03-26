import Head from "next/head";
import Home from "../components/Home/Home";

export default function Index() {
  return (
    <div >
      <Head>
        <title>Trucker</title>
      </Head>
      <Home />
    </div>
  );
}
