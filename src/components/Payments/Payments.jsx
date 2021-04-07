import { Grid } from "@material-ui/core";
import React from "react";
import NavBar from "../Appbar";
import Sidebar from "../Sidebar/Sidebar";
import PaymentTable from "./PaymentTable/PaymentTable";
import classes from "./payments.module.scss";
function Payments() {
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.navbar}>
        <NavBar />
      </Grid>
      <Grid item xs={12} container className={classes.main}>
        <Sidebar />
        <Grid item xs={10} className={classes.content}>
          <PaymentTable />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Payments;
