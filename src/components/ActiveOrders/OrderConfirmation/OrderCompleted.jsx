import { Box, Button, Divider, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import classes from "./order_completed.module.scss";
import { withStyles } from "@material-ui/core/styles";
import { Rating } from "@material-ui/lab";
import StarOutlinedIcon from "@material-ui/icons/StarOutline";
import StarIcon from "@material-ui/icons/Star";

function OrderCompleted() {
      const StyledRating = withStyles({
        iconFilled: {
          color: "#20cccc",
        },
        iconHover: {
          color: "#20aaaa",
        },
      })(Rating);
  return (
    <div className={classes.root}>
      <Paper className={classes.order_success_message}>
        <Typography>Order has been successfully completed</Typography>
        <Box my={5}>
          <Typography variant="h4">122$</Typography>
        </Box>
        <Box my={1}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            // fullWidth
          >
            <Typography variant="body1" color="textPrimary">
              Process Payment
            </Typography>
          </Button>
        </Box>
        <Box my={3}>
          <Typography color="textSecondary" variant="body2">
            Rate your experience
          </Typography>
        </Box>
        <Box my={2}>
          <Divider light />
        </Box>
        <Grid container>
          <Grid item xs={6}>
            <Typography color="textPrimary" variant="body2">
              Was the load picked up in time
            </Typography>
          </Grid>
          <Grid item xs={6} className="d_flex_row">
            <StyledRating
              name="rating"
              defaultValue={2.6}
              precision={0.5}
              value={2.6}
              icon={<StarIcon fontSize="inherit" />}
              emptyIcon={<StarOutlinedIcon fontSize="inherit" />}
            />
            <Box ml={2}>
              <Typography variant="subtitle1" color="textSecondary">
                2.6
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography color="textPrimary" variant="body2">
              Was the load delivered safe{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} className="d_flex_row">
            <StyledRating
              name="rating"
              defaultValue={0}
              precision={0.5}
              value={4.6}
              icon={<StarIcon fontSize="inherit" />}
              emptyIcon={<StarOutlinedIcon fontSize="inherit" />}
            />
            <Box ml={2}>
              <Typography variant="subtitle1" color="textSecondary">
                4.6
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Typography color="textPrimary" variant="body2">
              Was the load picked up in time
            </Typography>
          </Grid>
          <Grid item xs={6} className="d_flex_row">
            <StyledRating
              name="rating"
              defaultValue={0}
              precision={0.5}
              value={0}
              icon={<StarIcon fontSize="inherit" />}
              emptyIcon={<StarOutlinedIcon fontSize="inherit" />}
            />
            <Box ml={2}>
              <Typography variant="subtitle1" color="textSecondary">
                0.0
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Typography color="textPrimary" variant="body2">
              Was the load delivered safe{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} className="d_flex_row">
            <StyledRating
              name="rating"
              defaultValue={0}
              precision={0.5}
              value={0}
              icon={<StarIcon fontSize="inherit" />}
              emptyIcon={<StarOutlinedIcon fontSize="inherit" />}
            />
            <Box ml={2}>
              <Typography variant="subtitle1" color="textSecondary">
                0.0
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default OrderCompleted;
