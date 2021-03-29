import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  Typography,
} from "@material-ui/core";
import classes from "./login.module.scss";
import classnames from "classnames";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    //   dispatch(signIn(formData, history));
  };
  const handleChange = (type) => (e) => {
    setFormData({ ...formData, [type]: e.target.value });
  };
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleForgotPassword = () => {};

  return (
    <form className={classes.login_form} onSubmit={handleSubmit}>
      <Grid spacing={2} xs={12} container justify="center" >
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="email">EMAIL</InputLabel>
            <Input
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              handleChange={handleChange("email")}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="password">PASSWORD</InputLabel>
            <Input
              fullWidth
              id="password"
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              handleChange={handleChange("password")}
              handleShowPassword={handleShowPassword}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
        </Grid>
        <Typography>
          <Link href="#" color="textSecondary" onClick={handleForgotPassword}>
            FORGOT PASSWORD?
          </Link>
        </Typography>
      </Grid>
    </form>
  );
}

export default Login;
