import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  OutlinedInput,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";

import classnames from "classnames";
import { useState } from "react";
import classes from "./step3.module.scss";

function Step3Order({ setCurrentStep }) {
  const [selectedNeedOfferPrice, setSelectedNeedOfferPrice] = useState("yes");
  const [selectedOpenForBid, setSelectedOpenForBid] = useState("yes");

  return (
    <Grid item xs={6} className={classes.order_form}>
      <Grid item xs={10} className={classes.form_group}>
        <Typography color="textSecondary" variant="body1" component="h4">
          Do you want to enter an offer price
        </Typography>

        <RadioGroup
          aria-label="offer price"
          name="offer"
          value={selectedNeedOfferPrice}
          onChange={(e) => setSelectedNeedOfferPrice(e.target.value)}
        >
          <Grid xs={12} container justify="space-between">
            <Grid item xs={5} className={classes.checkbox_border}>
              <FormControlLabel
                value="no"
                name="offer"
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
                label="No"
              />
            </Grid>
            <Grid item xs={5} className={classes.checkbox_border}>
              <FormControlLabel
                value="yes"
                name="offer"
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
                label="Yes"
              />
            </Grid>
          </Grid>
        </RadioGroup>
      </Grid>

      {selectedNeedOfferPrice == "yes" && (
        <Grid item xs={6} className={classes.form_group}>
          <ButtonGroup
            color="secondary"
            aria-label="outlined primary button group"
          >
            <FormControl
              size="small"
              variant="outlined"
              style={{ width: "100%" }}
            >
              <OutlinedInput
                fullWidth
                id="request_radius"
                name="request_radius"
                placeholder="Enter offer price"
                // outlined
                // value={orderData.company_name}
              />
            </FormControl>
            <Button color="secondary" style={{ backgroundColor: "#eee" }}>
              $
            </Button>
          </ButtonGroup>
        </Grid>
      )}
      <Grid item xs={12}>
        <Divider light style={{ margin: "10px 0" }} />
      </Grid>

      <Grid item xs={10} className={classes.form_group}>
        <Typography color="textSecondary" variant="body1" component="h4">
          Open For Bid
        </Typography>

        <RadioGroup
          aria-label="offer price"
          name="offer"
          value={selectedOpenForBid}
          onChange={(e) => setSelectedOpenForBid(e.target.value)}
        >
          <Grid xs={12} container justify="space-between">
            <Grid item xs={5} className={classes.checkbox_border}>
              <FormControlLabel
                value="no"
                name="offer"
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
                label="No"
              />
            </Grid>
            <Grid item xs={5} className={classes.checkbox_border}>
              <FormControlLabel
                value="yes"
                name="offer"
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
                label="Yes"
              />
            </Grid>
          </Grid>
        </RadioGroup>
      </Grid>

      <Grid item justify="center" className="d_flex_col" style={{ flex: 1 }}>
        <Grid item className="d_flex_row">
          <Typography color="textSecondary">
            <Box mx={2}>Distance</Box>
          </Typography>
          <p>22kms</p>
        </Grid>
        <Grid item className="d_flex_row">
          <Typography color="textSecondary">
            <Box mx={2}>Estimated drive time</Box>
          </Typography>
          <p>2hrs</p>
        </Grid>
        <Grid item className="d_flex_row">
          <Typography color="textSecondary">
            <Box mx={2}>Estimated cost</Box>
          </Typography>
          <p>122$</p>
        </Grid>
      </Grid>

      <Grid item container justify="center" alignItems="center" xs={10}>
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => setCurrentStep(1)}
            fullWidth
          >
            <Typography
              variant="body1"
              fontSize=""
              weight="bold"
              color="textPrimary"
            >
              <Box fontWeight={500}>Send Request</Box>
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Step3Order;
