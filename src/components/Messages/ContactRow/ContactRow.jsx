import { Avatar, Badge, Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import classes from "./contact_row.module.scss";

function ContactRow() {
  return (
    <Grid container className={classes.root} alignItems="center">
      <Grid item xs={2}>
        <Avatar className={classes.avatar} src="/images/avatar.jpeg" />
      </Grid>
      <Grid item xs={7}>
        <Box my={1}>
          <Typography variant="subtitle2" color="textPrimary">
            Company name here
          </Typography>
        </Box>
        <Box my={1}>
          <Typography variant="body2" color="textSecondary">
            We need to re-asses our strategy.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3} justify="flex-end">
        <Box align="end" my={1}>
          <Typography color="textSecondary">10: 50am</Typography>
        </Box>
        <Box align="end" my={1}>
          <Badge badgeContent={3} style={{ color: "white" }} color="primary" />
        </Box>
      </Grid>
    </Grid>
  );
}

export default ContactRow;
