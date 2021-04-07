import {
  Badge,
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

import classnames from "classnames";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import classes from "./step2.module.scss";
import { useState } from "react";
import { KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/moment"

function Step2Order({ setCurrentStep }) {
  const [selectedPickTime, setSelectedPickTime] = useState("schedule");
  const [selectedDate, setSelectedDate] = useState(
    new Date("2020-08-18T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Grid item xs={6} className={classes.order_form}>
      <Grid item xs={10} className={classes.form_group}>
        <Typography color="textSecondary" variant="body1" component="h4">
          Pick up time
        </Typography>

        <RadioGroup
          aria-label="pick time"
          name="pick"
          value={selectedPickTime}
          onChange={(e) => setSelectedPickTime(e.target.value)}
        >
          <Grid xs={12} container justify="space-between">
            <Grid item xs={5} className={classes.checkbox_border}>
              <FormControlLabel
                value="urgent"
                name="pick"
                control={
                  <Radio
                    className={classes.checkbox}
                    disableRipple
                    color="primary"
                    checkedIcon={
                      <span
                        className={classnames(
                          classes.icon,
                          classes.checkedIcon
                        )}
                      />
                    }
                    icon={<span className={classes.icon} />}
                    inputProps={{ "aria-label": "decorative checkbox" }}
                  />
                }
                label="Urgent"
              />
            </Grid>
            <Grid item xs={5} className={classes.checkbox_border}>
              <FormControlLabel
                value="schedule"
                name="pick"
                control={
                  <Radio
                    className={classes.checkbox}
                    disableRipple
                    color="primary"
                    checkedIcon={
                      <span
                        className={classnames(
                          classes.icon,
                          classes.checkedIcon
                        )}
                      />
                    }
                    icon={<span className={classes.icon} />}
                    inputProps={{ "aria-label": "decorative checkbox" }}
                  />
                }
                label="Schedule"
              />
            </Grid>
          </Grid>
        </RadioGroup>
      </Grid>
      <Grid item xs={12}>
        <Divider light style={{ margin: "10px 0" }} />
      </Grid>

      {selectedPickTime == "urgent" ? (
        <>
          <Grid item xs={6} className={classes.form_group}>
            <Typography color="textSecondary" variant="body1" component="h4">
              Set Request reach Radius
            </Typography>
            <ButtonGroup
              color="secondary"
              aria-label="outlined primary button group"
            >
              <Button>Upto</Button>
              <FormControl
                size="small"
                variant="outlined"
                style={{ width: "100%" }}
              >
                <OutlinedInput
                  fullWidth
                  id="request_radius"
                  name="request_radius"
                  placeholder="View All"
                  outlined
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton>
                        <RemoveIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton>
                        <AddIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  // value={orderData.company_name}
                />
              </FormControl>
              <Button>Miles</Button>
            </ButtonGroup>
          </Grid>

          <Grid item xs={1} style={{ margin: "10px 0" }}>
            <Typography color="textSecondary" variant="body1" component="h4">
              Or
            </Typography>
          </Grid>
          <Grid item xs={10} className={classes.form_group}>
            <Typography color="textSecondary" variant="body1" component="h4">
              Enter Time Limit
            </Typography>
            <Grid xs={12} container justify="space-between">
              <Grid item xs={4}>
                <ButtonGroup
                  color="secondary"
                  aria-label="outlined primary button group"
                  fullWidth
                >
                  <Button size="small">With In</Button>
                  <FormControl
                    size="small"
                    variant="outlined"
                    style={{ width: "100%" }}
                  >
                    <OutlinedInput
                      fullWidth
                      id="with_in_day"
                      name="with_in_day"
                      outlined
                      // value={orderData.company_name}
                    />
                  </FormControl>
                </ButtonGroup>
              </Grid>
              <Grid item xs={4}>
                <FormControl
                  size="small"
                  variant="outlined"
                  style={{ width: "100%" }}
                >
                  {/* <InputLabel id="outlined-select-load_type-label">Hrs</InputLabel> */}
                  <Select
                    id="outlined-select-load_type"
                    select
                    value={"Breakable"}
                    variant="outlined"
                    color="secondary"
                  >
                    <MenuItem key="1" value="Breakable" color="textSecondary">
                      View All
                    </MenuItem>
                    <MenuItem key="2" value="Non Breakable">
                      None Breakable
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </>
      ) : (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid item xs={10} className={classes.form_group}>
            <Typography color="textSecondary" variant="body1" component="h4">
              Pick a date
            </Typography>
            <KeyboardDatePicker
              disableToolbar
              variant="outlined"
              format="MM/DD/yyyy"
              margin="normal"
              id="date-picker"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
          <Grid item xs={10} className={classes.form_group}>
            <Typography color="textSecondary" variant="body1" component="h4">
              Set a time
            </Typography>
            <KeyboardTimePicker
              margin="normal"
              variant="outlined"
              id="time-picker"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      )}

      <Grid item container justify="space-around" alignItems="center" xs={10}>
        <Grid item xs={4}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            fullWidth
            onClick={() => setCurrentStep(0)}
          >
            <Typography variant="body1" color="textPrimary">
              Back
            </Typography>
          </Button>
        </Grid>

        <Grid item xs={4}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => setCurrentStep(2)}
            fullWidth
          >
            <Typography variant="body1" color="textPrimary">
              Next
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Step2Order;
