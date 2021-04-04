import { Badge, Box, Card, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import classes from "./order_row.module.scss";
import classnames from "classnames";
import CustomGoogleMap from "../../../Home/CustomGoogleMap";
function OrderRow() {
  return (
    <Box mb={2} className={classes.root}>
      <Card className={classes.card}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          className={classes.grid}
        >
          <Grid item xs={3} container alignItems="center">
            <Grid item xs={12} className={classes.form_group}>
              <Box className={classnames("d_flex_row", classes.form_lable)}>
                <Box mr={1}>
                  <Badge
                    className={classnames(classes.badge, classes.badge_1)}
                  />
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body2"
                  component="h4"
                >
                  Pick up address
                </Typography>
              </Box>
              <Box ml={3}>
                <Typography color="textPrimary" variant="body2" component="h4">
                  2604 Washington Rd, Augusta , GA 30928
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} className={classes.form_group}>
              <Box className={classnames("d_flex_row", classes.form_lable)}>
                <Box mr={1}>
                  <Badge
                    className={classnames(classes.badge, classes.badge_2)}
                  />
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body2"
                  component="h4"
                >
                  Drop off Address
                </Typography>
              </Box>
              <Box ml={3}>
                <Typography color="textPrimary" variant="body2" component="h4">
                  2604 Washington Rd, Augusta , GA 30928
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Divider orientation="vertical" flexItem light xs={1} />
          <Grid item xs={2}>
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
          <Divider orientation="vertical" flexItem light xs={1} />
          <Grid item xs={2}>
            <Typography color="textSecondary">
              <Box mr={2}>Distance</Box>
            </Typography>
            <p>12:38 Pm Nov 12, 2 days ago</p>
          </Grid>
          <Grid item xs={4}>
            <CustomGoogleMap />
          </Grid>
        </Box>
      </Card>
    </Box>
  );
}

export default OrderRow;
