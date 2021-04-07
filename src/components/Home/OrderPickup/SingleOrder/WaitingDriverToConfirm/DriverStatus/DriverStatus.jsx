import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import classes from "./driverstatus.module.scss";
import StarIcon from "@material-ui/icons/Star";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
function DriverStatus() {
  const StyledRating = withStyles({
    iconFilled: {
      color: "#20cccc",
    },
    iconHover: {
      color: "#20aaaa",
    },
  })(Rating);
  return (
    <Grid className={classnames("d_flex_row", classes.root)}>
      <Grid
        item
        xs={3}
        container
        alignItems="center"
        justify="center"
        className={classnames("d_flex_col", classes.col)}
      >
        <Typography>Driver</Typography>
        <Avatar className={classes.avatar} src="/images/avatar.jpeg" />
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
      <Divider orientation="vertical" light flexItem />
      <Grid
        item
        xs={3}
        container
        alignItems="center"
        justify="center"
        className={classnames("d_flex_col", classes.col)}
      >
        <Typography>Vehicle</Typography>
        {/* <Avatar className={classes.avatar} src="/images/avatar.jpeg" /> */}
        <img
          width="80px"
          height="50px"
          src="/images/trucker1.jpeg"
          alt="trucker1"
        />
        <Typography>Honda Motorcylce</Typography>
        <Box ml={2}>
          <Typography variant="subtitle1">W25566</Typography>
        </Box>
      </Grid>
      <Divider orientation="vertical" light flexItem />
      <Grid item xs={4} className={classnames("d_flex_col", classes.col)}>
        <div className={classes.actions} fullWidth>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className={classes.submit}
            onClick={() => setCurrentStep(1)}
            fullWidth
          >
            <Typography variant="body1" color="primary">
              Message Driver
            </Typography>
          </Button>
          {false ? (
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.submit}
              onClick={() => setCurrentStep(1)}
              fullWidth
            >
              <Typography variant="body1" color="error">
                Request another Driver
              </Typography>
            </Button>
          ) : (
            <Box>
              <Typography align="center" variant="subtitle2">Arrived In</Typography>
              <Typography align="center" variant="subtitle1">2:13:33</Typography>
            </Box>
          )}
        </div>
      </Grid>
    </Grid>
  );
}

export default DriverStatus;
