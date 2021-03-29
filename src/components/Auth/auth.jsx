import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import classes from "./auth.module.scss";
import Image from "next/image";
import VerifyPhone from "./VerifyPhone";
import CustomSwitch from "./CustomSwitch/CustomSwitch";
import Signup from "./Signup/Signup";
import Login from "./Login";

function Auth() {
  const [isSignUp, setisSignUp] = useState(false);

  return (
    <Grid className={classes.main} container>
      <Grid className={classes.left} item xs={12} sm={7}>
        <Image src="/images/main.jpg" layout="fill" objectFit="contain" />
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        className={classes.right}
        justify="center"
        direction="column"
        alignItems="center"
      >
        <div className={classes.logo}>
          <Image
            src="/images/tp.png"
            objectFit="cover"
            width={300}
            height={200}
          />
        </div>
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
      </Grid>
    </Grid>
  );
}

export default Auth;
