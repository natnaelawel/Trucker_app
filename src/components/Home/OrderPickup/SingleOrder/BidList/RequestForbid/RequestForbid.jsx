import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  TextField,
} from "@material-ui/core";
import classes from "./requestforbid.module.scss";

const RequestForbid = ({rowNumber}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={classes.rebid}>
      <Box my={2}>
        <Typography variant="subtitle2" color="primary" onClick={handleClick}>
          Accept for Rebid
        </Typography>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        className={classes.rebid_form}
      >
        <Box p={3}>
          <Grid className={classes.rebid_form}>
            <Box mb={2}>
              <Typography className={classes.typography}>
                Asking for rebid
              </Typography>
            </Box>
            <FormControl fullWidth>
              <TextField
                id="message_area"
                label="Add a note"
                multiline
                rows={4}
                variant="outlined"
                defaultValue={rowNumber}
              />
            </FormControl>
            <Box my={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                fullWidth
              >
                <Typography variant="body1">Send Request</Typography>
              </Button>
            </Box>
          </Grid>
        </Box>
      </Popover>
    </div>
  );
};

export default RequestForbid;
