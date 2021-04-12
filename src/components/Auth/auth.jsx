import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import classes from "./auth.module.scss";
import Image from "next/image";
import VerifyPhone from "./VerifyPhone";
import CustomSwitch from "./CustomSwitch/CustomSwitch";
import Signup from "./Signup/Signup";
import Login from "./Login";
import InsertPhone from "./InsertPhone";

function Auth() {
  const [isSignUp, setisSignUp] = useState(false);

  return (
    <Grid className={classes.main} container fullWidth
     justify="space-between"
    alignItems="stretch">
      <Grid item className={classes.left}  xs={12} sm={7}>
        <div className={classes.imageContainer}>
          <Image src="/images/landing.svg" layout="fill" objectFit="contain" />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        container
        className={classes.right}
      >
        <div className={classes.logoArea}>

        <div className={classes.logo}>
          <Image
            src="/images/black_logo.svg"
            objectFit="contain"
            width={100}
            height={100}
            />
        </div>
            </div>
       
        <div className={classes.authForm}>
           {/* <div> */}
          {/* <InsertPhone /> */}
        {/* </div> */}
        {/* <div> */}
          {/* <VerifyPhone /> */}
        {/* </div> */}
          <div className={classes.CustomSwitch}>
            <CustomSwitch setisSignUp={setisSignUp} isSignUp={isSignUp} />
          </div>
          <div className={classes.form}>{isSignUp ? <Signup /> : <Login />}</div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Auth;
