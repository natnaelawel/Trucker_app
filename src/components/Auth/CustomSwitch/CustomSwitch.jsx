import { Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import classes from "./customswitch.module.scss";
import classnames from "classnames";
function CustomSwitch({ isSignUp, setisSignUp }) {
  const handleToggle = (value) => () => {
    setisSignUp(value);
  };
  return (
    <div className={classes.switch}>
      <Button
        className={classnames(classes.button, !isSignUp && classes.isActive)}
        fullWidth
        variant="text"
        disableElevation
        onClick={handleToggle(false)}
      >
        <Typography
          color={!isSignUp ? "textPrimary" : "textSecondary"}
        >
          LOGIN
        </Typography>
      </Button>
      <Button
        className={classnames(classes.button, isSignUp && classes.isActive)}
        fullWidth
        variant="text"
        disableElevation
        onClick={handleToggle(true)}
      >
        <Typography color={isSignUp ? "textPrimary" : "textSecondary"}>
          REGISTER
        </Typography>
      </Button>
    </div>
  );
}

export default CustomSwitch;
