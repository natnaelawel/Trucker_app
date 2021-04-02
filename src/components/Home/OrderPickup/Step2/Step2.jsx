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
  TextField,
  Typography,
} from "@material-ui/core";

import classnames from "classnames";
import SvgIcon from "@material-ui/core/SvgIcon";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import classes from "./step2.module.scss";
import { useState } from "react";

function Step2Order({ setCurrentStep }) {
  const [selectedPickTime, setSelectedPickTime] = useState("schedule");

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
          <Grid xs={12} container justify="space-around">
            <Grid item xs={5} style={classes.border}>
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
            <Grid item xs={5}>
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
        <Divider light />
      </Grid>
      <Grid item xs={6}>
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
              id="company_name"
              name="company_name"
              label="company_name"
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
      <Grid item xs={1}>
        <Typography>Or</Typography>
      </Grid>
      <Grid item xs={6}>
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
              id="company_name"
              name="company_name"
              label="company_name"
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
