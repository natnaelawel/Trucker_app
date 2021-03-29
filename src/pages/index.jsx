import Head from "next/head";
import Home from "../components/Home/Home";
import Meta from "../components/Meta";

export default function Index() {
  return (
    <div >
      <Meta title="Trucker" keywords="trucker app, driver app" description="some description"/>
      <Home />
    </div>
  );
}
