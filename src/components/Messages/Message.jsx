import { Box, Divider, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import NavBar from "../Appbar";
import DriverStatus from "../Home/OrderPickup/SingleOrder/WaitingDriverToConfirm/DriverStatus/DriverStatus";
import Sidebar from "../Sidebar/Sidebar";
import ContactRow from "./ContactRow/ContactRow";
import classes from "./message.module.scss";
function Messages() {
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.navbar}>
        <NavBar />
      </Grid>
      <Grid item xs={12} container className={classes.main}>
        <Sidebar />
        <Grid item xs={10} className={classes.content}>
          <Paper className={classes.chatbox}>
            <Grid container>
              <Grid item xs={4} className={classes.contact_list}>
                <Grid item xs={12}>
                  <Box
                   my={3}>
                    <Typography variant="subtitle1" color="textSecondary">
                      Messages
                    </Typography>
                  </Box>
                </Grid>
                <Box my={2}>
                  <Divider light />
                </Box>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ].map((contact, index) => (
                  <Grid item xs={12}>
                    <ContactRow />
                    <Divider light />
                  </Grid>
                ))}
              </Grid>
              <Grid
                item
                xs={8}
                className={classes.message_area}
                justify="center"
                align="center"
              >
                <Grid item xs={12}>
                  <DriverStatus />
                </Grid>
                <Grid item xs={12}>
                    <Divider/>
                </Grid>
                <Grid item xs={12}>
                  somet
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Messages;
