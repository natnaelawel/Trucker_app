import React, { useState } from "react";
import classnames from "classnames";
import PhoneInput from "react-phone-input-2";
import classes from "./insertphone.module.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Button, Grid, Typography } from "@material-ui/core";

function InsertPhone() {
  const [value, setValue] = useState();
  return (
    <Grid
      container
      className={classes.insertphone}
      spacing={5}
      justify="center"
    >
      <Grid item xs={12} className={classes.header}>
        <div className={classes.back_arrow}>
          <ArrowBackIosIcon color="secondary" />
        </div>
        <Typography variant="h6" color="secondary" className={classes.title}>
          Insert your Phone Number
        </Typography>
      </Grid>
      <Typography variant="body2" color="secondary">
        Select your Country and Phone Number
      </Typography>
      <Grid item xs={12}>
        <PhoneInput
          country={"us"}
          value={value}
          onChange={setValue}
          containerStyle={{ width: "100%", display: "flex" }}
          containerClass={classes.phoneContainer}
          inputClass={classes.phoneInput}
          enableSearch
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Continue
        </Button>
      </Grid>
    </Grid>
  );
}

export default InsertPhone;
