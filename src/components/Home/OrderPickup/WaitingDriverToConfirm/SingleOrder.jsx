import {
  Badge,
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";

import classnames from "classnames";

import classes from "./singleorder.module.scss";
import NavBar from "../../../../Appbar";
import Sidebar from "../../../../Sidebar/Sidebar";
import CustomGoogleMap from "../../../CustomGoogleMap";
import BidList from "./BidList/BidList";
import { useState } from "react";

function SingleOrder({ orderData, setOrderData, setCurrentStep }) {
  const [availableBids, setAvailableBids] = useState([1]);
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12} container className={classes.root}>
        <Sidebar />
        <Grid
          item
          xs={10}
          className={classes.content}
          container
          justify="center"
        >
          <Grid item xs={6} className={classes.order_form}>
            <Grid item xs={10} className={classes.form_group}>
              <div className={classnames("d_flex_row", classes.form_lable)}>
                <Box mr={1}>
                  <Badge
                    className={classnames(classes.badge, classes.badge_1)}
                  />
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                  component="h4"
                >
                  Pick up address
                </Typography>
              </div>
              <Box ml={3}>
                <Typography color="textPrimary" variant="body1" component="h4">
                  2604 Washington Rd, Augusta , GA 30928{" "}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={10} className={classes.form_group}>
              <div className={classnames("d_flex_row", classes.form_lable)}>
                <Box mr={1}>
                  <Badge
                    className={classnames(classes.badge, classes.badge_2)}
                  />
                </Box>

                <Typography
                  color="textSecondary"
                  variant="body1"
                  component="h4"
                >
                  Drop off Address
                </Typography>
              </div>
              <Box ml={3}>
                <Typography color="textPrimary" variant="body1" component="h4">
                  2604 Washington Rd, Augusta , GA 30928
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box my={1}>
                <Divider light />
              </Box>{" "}
            </Grid>
            <Grid
              item
              xs={10}
              // style={{ display: "flex", justifyContent: "space-between" }}

              container
            >
              <Grid item sm={5} className={classes.form_group}>
                <Typography
                  color="textSecondary"
                  variant="body1"
                  component="h4"
                >
                  Load Weight
                </Typography>
                <Typography color="textPrimary" variant="body1" component="h4">
                  124 KG
                </Typography>
              </Grid>
              <Grid item sm={5} className={classes.form_group}>
                <Typography
                  color="textSecondary"
                  variant="body1"
                  component="h4"
                >
                  Load Type
                </Typography>
                <Typography color="textPrimary" variant="body1" component="h4">
                  Breakable
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Box my={1}>
                <Divider light />
              </Box>
            </Grid>
            <Grid item xs={12} container justify="space-between">
              <Grid item xs={4}>
                <Typography
                  color="textSecondary"
                  variant="body1"
                  component="h4"
                >
                  Vehicle type
                </Typography>
                <Card style={{ width: "150px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Hot shot"
                      height="70"
                      image="/images/trucker1.jpeg"
                      title="Hot shot"
                    />
                    <Typography
                      align="center"
                      variant="subtitle1"
                      color="textSecondary"
                      component="h2"
                    >
                      50 $/mile
                    </Typography>
                    <Typography align="center" variant="body2" component="p">
                      Hot Shot
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  color="textSecondary"
                  variant="body1"
                  component="h4"
                >
                  Vehicle amenities
                </Typography>
                <Typography color="textPrimary">None</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  color="textSecondary"
                  variant="body1"
                  component="h4"
                >
                  Vehicle bed type
                </Typography>
                <Typography color="textPrimary">Flat Bed</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Box my={1}>
                <Divider light />
              </Box>
            </Grid>
            <Grid item xs={10} container className={classes.form_group}>
              <Grid item xs={6}>
                <Typography
                  color="textSecondary"
                  variant="body1"
                  component="h4"
                >
                  Receiver Company name
                </Typography>
                <Typography color="textPrimary">Sam sam</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  color="textSecondary"
                  variant="body1"
                  component="h4"
                >
                  Phone Number
                </Typography>
                <Typography color="textPrimary">+129973900</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Divider light />
              </Box>{" "}
            </Grid>
            <Grid item xs={10} container className={classes.form_group}>
              <Grid item xs={6}>
                <Typography
                  color="textSecondary"
                  variant="body1"
                  component="h4"
                >
                  Pick time
                </Typography>
                <div className="d_flex_row">
                  <Typography color="textSecondary">Scheduled for</Typography>
                  <Box mx={2}>
                    <Typography color="textPrimary">12, 1:30pm</Typography>
                  </Box>
                </div>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  color="textSecondary"
                  variant="body1"
                  component="h4"
                >
                  Offer Price
                </Typography>
                <Typography color="textPrimary">No</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Box my={1}>
                <Divider light />
              </Box>{" "}
            </Grid>
            <Grid xs={12} justify="space-between" container>
              <Grid item xs={6}>
                <Grid item className="d_flex_row">
                  <Typography color="textSecondary">
                    <Box mr={2}>Distance</Box>
                  </Typography>
                  <p>22kms</p>
                </Grid>
                <Grid item className="d_flex_row">
                  <Typography color="textSecondary">
                    <Box mr={2}>Estimated drive time</Box>
                  </Typography>
                  <p>2hrs</p>
                </Grid>
                <Grid item className="d_flex_row">
                  <Typography color="textSecondary">
                    <Box mr={2}>Estimated cost</Box>
                  </Typography>
                  <p>122$</p>
                </Grid>
              </Grid>
              <Grid
                item
                xs={6}
                container
                alignItems="center"
                justify="space-between"
              >
                <Grid item>
                  <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    className={classes.submit}
                    onClick={() => setCurrentStep(1)}
                    fullWidth
                  >
                    <Typography variant="body1" color="primary">
                      Edit Request
                    </Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    className={classes.submit}
                    onClick={() => setCurrentStep(1)}
                    fullWidth
                  >
                    <Typography variant="body1" color="error">
                      Cancel Request
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} className={classes.map}>
            {availableBids.length == 0 ? <CustomGoogleMap /> : <BidList />}
          </Grid>
          {availableBids.length == 0 && (
            <Grid item container justify="center" alignItems="center" xs={10}>
              <Grid item xs={6}>
                <Box marginTop={1}>
                  <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    className={classes.waitingButton}
                    onClick={() => setCurrentStep(1)}
                    fullWidth
                  >
                    <Typography variant="body1" color="primary">
                      Waiting For Drivers To Bid
                    </Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SingleOrder;
