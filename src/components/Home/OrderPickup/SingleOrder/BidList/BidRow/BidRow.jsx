import {
  Avatar,
  Box,
  Button,
  Grid,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarIcon from "@material-ui/icons/Star";

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import classes from "./bidrow.module.scss";
import RequestForbid from "../RequestForbid/RequestForbid";
function BidRow({ column, index }) {
  const StyledRating = withStyles({
    iconFilled: {
      color: "#20cccc",
    },
    iconHover: {
      color: "#20aaaa",
    },
  })(Rating);
  return (
    <TableRow
      hover
      role="checkbox"
      tabIndex={-1}
      key={column.code}
      className={classes.row}
    >
      <TableCell key={1} align={column.align} className={classes.cell}>
        <Grid container alignItems="center" justify="space-between">
          <Grid item xs={3}>
            <Avatar className={classes.avatar} src="/images/avatar.jpeg" />
          </Grid>
          <Grid item xs={8}>
            <Typography>Robert Grant</Typography>
          </Grid>
          <Grid item xs={12} className="d_flex_row">
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
      </TableCell>
      <TableCell key={2} align={column.align} className={classes.cell}>
        <img
          width="80px"
          height="50px"
          src="/images/trucker1.jpeg"
          alt="trucker1"
        />
        <Typography variant="subtitle2">Honda Motorcylce</Typography>
      </TableCell>
      <TableCell key={3} align={column.align} className={classes.cell}>
        <Typography variant="subtitle2">8 mins away</Typography>
      </TableCell>
      <TableCell key={4} align={column.align} className={classes.cell}>
        <Typography color="primary">124$</Typography>
      </TableCell>
      <TableCell key={5} align={column.align} className={classes.cell}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          fullWidth
        >
          <Typography variant="body1">Accept</Typography>
        </Button>
          <RequestForbid rowNumber={index}/>
      
      </TableCell>
    </TableRow>
  );
}

export default BidRow;
