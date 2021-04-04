import { Grid } from "@material-ui/core";
import React from "react";
import NavBar from "../../Appbar";
import Sidebar from "../../Sidebar/Sidebar";
import OrderRow from "./OrderRow/OrderRow";
import classes from "./active_orders.module.scss";

function ActiveOrders() {
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.navbar}>
        <NavBar />
      </Grid>
      <Grid item xs={12} container className={classes.main}>
        <Sidebar />
        <Grid item xs={10} className={classes.order_list}>
          {[1, 2, 3, 4, 5, 6].map((row, index) => (
            <OrderRow key={index} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ActiveOrders;
