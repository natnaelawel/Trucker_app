import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Switch,
  Typography,
} from "@material-ui/core";
import NavBar from "../Appbar";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./profile.module.scss";
import Link from "next/link";
import classnames from "classnames";
import { Rating } from "@material-ui/lab";
import StarIcon from "@material-ui/icons/Star";
import { withStyles } from "@material-ui/core/styles";
function Profile() {
  const StyledRating = withStyles({
    iconFilled: {
      color: "#20cccc",
    },
    iconHover: {
      color: "#20aaaa",
    },
  })(Rating);
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.navbar}>
        <NavBar />
      </Grid>
      <Grid item xs={12} container className={classes.main}>
        <Sidebar />
        <Grid item xs={7} className={classes.content}>
          <Box my={2}>
            <Card>
              <Grid container>
                <Grid
                  xs={3}
                  item
                  container
                  justify="center"
                  alignItems="center"
                >
                  <Avatar
                    className={classes.profile_avatar}
                    src="/images/friend1.jpg"
                  />
                </Grid>
                <Grid xs={9} item style={{ padding: "10px 40px" }}>
                  <Grid container item xs={12}>
                    <Grid item xs={8}>
                      <Box my={2}>
                        <Typography variant="h6">Alejandro Lopez</Typography>
                        <Typography variant="subtitle1">
                          Alejandro@gmail.com
                        </Typography>
                        <Typography variant="subtitle2">0685151212</Typography>
                      </Box>
                    </Grid>
                    <Grid xs={4}>
                      <Box my={2}>
                        <Link href="/profile/edit">
                          <Typography
                            align="right"
                            color="primary"
                            variant="subtitle1"
                          >
                            Edit
                          </Typography>
                        </Link>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} container alignItems="center">
                    <Grid item xs={8}>
                      <Box my={3}>
                        <Button
                          variant="outlined"
                          color="primary"
                          className={classes.yourcode_btn}
                        >
                          <Typography variant="subtitle1">
                            Your code is DF9382UI
                          </Typography>
                        </Button>
                      </Box>
                    </Grid>
                    <Grid xs={4}>
                      <Link href="/profile/changepassword">
                        <Typography
                          align="right"
                          color="primary"
                          variant="subtitle1"
                        >
                          Change Password
                        </Typography>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Box>
          <Box my={2}>
            <Card>
              <Box py={3}>
                {/* <Box pl={3}>
                  <Typography variant="h6">Favourite Companies</Typography>
                </Box> */}
                <Grid xs={12} container justify="center">
                  <Grid item xs={12}>
                    <Box px={3}>
                      <Typography variant="h6" alignItems="center">
                        Favourite Companies
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    container
                    alignItems="center"
                    justify="center"
                    className={classnames("d_flex_col", classes.col)}
                  >
                    <Avatar
                      className={classes.avatar}
                      src="/images/friend1.jpg"
                    />
                    <Typography>Robert Grant</Typography>
                    <Grid className="d_flex_row">
                      <StyledRating
                        name="rating"
                        defaultValue={2.6}
                        precision={0.5}
                        readOnly
                        icon={<StarIcon fontSize="small" />}
                      />
                      <Box ml={2}>
                        <Typography variant="subtitle1">5.0</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    container
                    alignItems="center"
                    justify="center"
                    className={classnames("d_flex_col", classes.col)}
                  >
                    <Avatar
                      className={classes.avatar}
                      src="/images/avatar.jpeg"
                    />
                    <Typography>Robert Grant</Typography>
                    <Grid className="d_flex_row">
                      <StyledRating
                        name="rating"
                        defaultValue={2.6}
                        precision={0.5}
                        readOnly
                        icon={<StarIcon fontSize="small" />}
                      />
                      <Box ml={2}>
                        <Typography variant="subtitle1">5.0</Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    container
                    alignItems="center"
                    justify="center"
                    className={classnames("d_flex_col", classes.col)}
                  >
                    <Avatar
                      className={classes.avatar}
                      src="/images/avatar.jpeg"
                    />
                    <Typography>Robert Grant</Typography>
                    <Grid className="d_flex_row">
                      <StyledRating
                        name="rating"
                        defaultValue={2.6}
                        precision={0.5}
                        readOnly
                        icon={<StarIcon fontSize="small" />}
                      />
                      <Box ml={2}>
                        <Typography variant="subtitle1">5.0</Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    container
                    alignItems="center"
                    justify="center"
                    className={classnames("d_flex_col", classes.col)}
                  >
                    <Avatar
                      className={classes.avatar}
                      src="/images/friend2.jpg"
                    />
                    <Typography>Robert Grant</Typography>
                    <Grid className="d_flex_row">
                      <StyledRating
                        name="rating"
                        defaultValue={2.6}
                        precision={0.5}
                        readOnly
                        icon={<StarIcon fontSize="small" />}
                      />
                      <Box ml={2}>
                        <Typography variant="subtitle1">5.0</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    container
                    alignItems="center"
                    justify="center"
                    className={classnames("d_flex_col", classes.col)}
                  >
                    <Avatar
                      className={classes.avatar}
                      src="/images/avatar.jpeg"
                    />
                    <Typography>Robert Grant</Typography>
                    <Grid className="d_flex_row">
                      <StyledRating
                        name="rating"
                        defaultValue={2.6}
                        precision={0.5}
                        readOnly
                        icon={<StarIcon fontSize="small" />}
                      />
                      <Box ml={2}>
                        <Typography variant="subtitle1">5.0</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Box>
          <Box my={2}>
            <Card>
              <Box m={3}>
                <Box my={2}>
                  <Typography>Bank Information</Typography>
                </Box>
                <Box my={2} align="left" display="flex" alignItems="center">
                  <InputLabel htmlFor="notification">Notification</InputLabel>
                  <FormControl id="notification">
                    <Switch
                      checked={true}
                      // onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  </FormControl>
                  {/* } */}
                  {/* labelPlacement="start" */}
                  {/* label="Bank Information" */}
                  {/* /> */}
                </Box>
                <Box my={2}>
                  <Typography>Language</Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Profile;
