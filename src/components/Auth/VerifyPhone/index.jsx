import React, { useState } from "react";
import classnames from "classnames";
import PhoneInput from "react-phone-input-2";
import classes from "./verifyphone.module.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Button, Grid, Link, Typography } from "@material-ui/core";
// import ReactInputVerificationCode from "react-input-verification-code";
import dynamic from "next/dynamic";

const ReactInputVerificationCode = dynamic(
  () => {
    return import("react-input-verification-code");
  },
  { ssr: false }
);

function ValidatePhone() {
  const [value, setValue] = useState();
  return (
    <Grid container className={classes.verify} spacing={3} justify="center">
      <Grid item xs={12} className={classes.header}>
        <div className={classes.back_arrow}>
          <ArrowBackIosIcon color="secondary" />
        </div>
        <Typography variant="h6" color="secondary" className={classes.title}>
          Phone Number Verification
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" align="center" color="secondary">
          Please type the verification code sent via SMS to: 
        </Typography>
        <br/>
        <Typography align="center" color="textSecondary">
            +251 915 670 645
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.verify_input}>
        <ReactInputVerificationCode placeholder={0} onChange={console.log} />
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Verify
        </Button>
      </Grid>
      <Grid
        item
        justify="center"
        alignItems="center"
        className={classes.bottomText}
      >
        <Typography color="textSecondary">Don't you receive code?</Typography>
        <Typography align="center">
          <Link href="#" color="textPrimary" onClick={() => {}}>
            RESEND?
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ValidatePhone;
