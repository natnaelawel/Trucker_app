import {
  Badge,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

import classnames from "classnames";
import SvgIcon from "@material-ui/core/SvgIcon";

import classes from "./step1.module.scss";
import TruckerSlider from "../TruckSlider/TruckSlider";

function Step1Order({orderData, setOrderData, setCurrentStep}) {
  return (
    <Grid item xs={6} className={classes.order_form}>
      <Grid item xs={10} className={classes.form_group}>
        <div className={classnames("d_flex_row", classes.form_lable)}>
          <Badge className={classnames(classes.badge, classes.badge_1)} />
          <Typography color="textSecondary" variant="body1" component="h4">
            Pick up address
          </Typography>
        </div>
        <FormControl size="small" variant="outlined" style={{ width: "100%" }}>
          <InputLabel htmlFor="pick_up_address">
            <Typography>pick up address</Typography>
          </InputLabel>
          <OutlinedInput
            fullWidth
            id="pick_up_address"
            name="pick_up_address"
            label="pick_up_address"
            placeholder="pick up address here(Auto filled)"
            value={orderData.p_address}
            onChange={(e) =>
              setOrderData((prev) => ({ ...prev, p_address: e.target.value }))
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="pick up address"
                  edge="end"
                  style={{ display: "flex" }}
                >
                  <Typography color="primary" style={{ margin: "0 5px" }}>
                    Pin on map
                  </Typography>

                  <SvgIcon viewBox="0 0 56 79.398">
                    <g
                      id="Group_9836"
                      data-name="Group 9836"
                      transform="translate(-1075 -492.602)"
                    >
                      <ellipse
                        id="Ellipse_51"
                        data-name="Ellipse 51"
                        cx="28"
                        cy="4.5"
                        rx="28"
                        ry="4.5"
                        transform="translate(1075 563)"
                        fill="#151515"
                      />
                      <g id="pinMap" transform="translate(1079 492.602)">
                        <g id="Group_3" data-name="Group 3">
                          <path
                            id="Oval_3"
                            data-name="Oval 3"
                            d="M23.413,71.787c0,.772,23.413-35.877,23.413-48.653A23.274,23.274,0,0,0,23.413,0,23.274,23.274,0,0,0,0,23.133C0,35.909,23.413,71.015,23.413,71.787Z"
                            fill="#151515"
                          />
                          <circle
                            id="Oval_4"
                            data-name="Oval 4"
                            cx="10.926"
                            cy="10.926"
                            r="10.926"
                            transform="translate(12.487 12.487)"
                            fill="#20cccc"
                          />
                        </g>
                      </g>
                    </g>
                  </SvgIcon>
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={10} className={classes.form_group}>
        <div className={classnames("d_flex_row", classes.form_lable)}>
          <Badge className={classnames(classes.badge, classes.badge_2)} />
          <Typography color="textSecondary" variant="body1" component="h4">
            Drop off Address
          </Typography>
        </div>
        <FormControl size="small" variant="outlined" style={{ width: "100%" }}>
          <InputLabel htmlFor="drop_off_address">
            <Typography>Drop of Address</Typography>
          </InputLabel>
          <OutlinedInput
            fullWidth
            id="drop_off_address"
            name="pick_up_address"
            label="drop_off_address"
            placeholder="Enter Drop off Address here(Auto filled)"
            value={orderData.d_address}
            onChange={(e) =>
              setOrderData((prev) => ({ ...prev, d_address: e.target.value }))
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="pick up address"
                  edge="end"
                  style={{ display: "flex" }}
                  // handleShowPassword={handleShowPassword}
                >
                  <Typography color="primary" style={{ margin: "0 5px" }}>
                    Pin on map
                  </Typography>

                  <SvgIcon viewBox="0 0 56 79.398">
                    <g
                      id="Group_9836"
                      data-name="Group 9836"
                      transform="translate(-1075 -492.602)"
                    >
                      <ellipse
                        id="Ellipse_51"
                        data-name="Ellipse 51"
                        cx="28"
                        cy="4.5"
                        rx="28"
                        ry="4.5"
                        transform="translate(1075 563)"
                        fill="#151515"
                      />
                      <g id="pinMap" transform="translate(1079 492.602)">
                        <g id="Group_3" data-name="Group 3">
                          <path
                            id="Oval_3"
                            data-name="Oval 3"
                            d="M23.413,71.787c0,.772,23.413-35.877,23.413-48.653A23.274,23.274,0,0,0,23.413,0,23.274,23.274,0,0,0,0,23.133C0,35.909,23.413,71.015,23.413,71.787Z"
                            fill="#151515"
                          />
                          <circle
                            id="Oval_4"
                            data-name="Oval 4"
                            cx="10.926"
                            cy="10.926"
                            r="10.926"
                            transform="translate(12.487 12.487)"
                            fill="#20cccc"
                          />
                        </g>
                      </g>
                    </g>
                    {/* <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" /> */}
                  </SvgIcon>
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Divider light />
      </Grid>
      <Grid
        item
        xs={10}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid item sm={5} className={classes.form_group}>
          <Typography color="textSecondary" variant="body1" component="h4">
            Load Weight
          </Typography>
          <FormControl
            size="small"
            variant="outlined"
            style={{ width: "100%" }}
          >
            <Select
              id="outlined-select-load_type"
              select
              value={"Breakable"}
              // onChange={handleChange}
              variant="outlined"
              inputProps={{
                style: {
                  height: 10,
                },
              }}
            >
              <MenuItem key="1" value="Breakable">
                View All
              </MenuItem>
              <MenuItem key="2" value="Non Breakable">
                None Breakable
              </MenuItem>

              {/* {currencies.map((option) => ( */}
              {/* <MenuItem key={option.value} value={option.value}> */}
              {/* {option.label} */}
              {/* </MenuItem> */}
              {/* ))} */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={5} className={classes.form_group}>
          <Typography color="textSecondary" variant="body1" component="h4">
            Load Type
          </Typography>
          <FormControl
            size="small"
            variant="outlined"
            style={{ width: "100%" }}
          >
            <Select
              id="outlined-select-load_type"
              select
              value={"Breakable"}
              // onChange={handleChange}
              variant="outlined"
            >
              <MenuItem key="1" value="Breakable">
                Breakable
              </MenuItem>
              <MenuItem key="2" value="Non Breakable">
                None Breakable
              </MenuItem>

              {/* {currencies.map((option) => ( */}
              {/* <MenuItem key={option.value} value={option.value}> */}
              {/* {option.label} */}
              {/* </MenuItem> */}
              {/* ))} */}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography color="textSecondary" variant="body1" component="h4">
          Vehicle type
        </Typography>
        <TruckerSlider />
      </Grid>
      <Grid
        item
        xs={10}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid item sm={5} className={classes.form_group}>
          <Typography color="textSecondary" variant="body1" component="h4">
            Vehicle amenities
          </Typography>
          <FormControl
            size="small"
            variant="outlined"
            style={{ width: "100%" }}
          >
            <Select
              id="outlined-select-Vehicle_amenities"
              select
              value={"Breakable"}
              // onChange={handleChange}
              variant="outlined"
            >
              <MenuItem key="1" value="Breakable">
                Breakable
              </MenuItem>
              <MenuItem key="2" value="Non Breakable">
                None Breakable
              </MenuItem>

              {/* {currencies.map((option) => ( */}
              {/* <MenuItem key={option.value} value={option.value}> */}
              {/* {option.label} */}
              {/* </MenuItem> */}
              {/* ))} */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={5} className={classes.form_group}>
          <Typography color="textSecondary" variant="body1" component="h4">
            Vehicle bed type
          </Typography>
          <FormControl
            size="small"
            variant="outlined"
            style={{ width: "100%" }}
          >
            <Select
              id="outlined-select-load_type"
              select
              value={"Breakable"}
              // onChange={handleChange}
              variant="outlined"
            >
              <MenuItem key="1" value="Breakable">
                Breakable
              </MenuItem>
              <MenuItem key="2" value="Non Breakable">
                None Breakable
              </MenuItem>

              {/* {currencies.map((option) => ( */}
              {/* <MenuItem key={option.value} value={option.value}> */}
              {/* {option.label} */}
              {/* </MenuItem> */}
              {/* ))} */}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider light />
      </Grid>
      <Grid item xs={10} className={classes.form_group}>
        <Typography color="textSecondary" variant="body1" component="h4">
          Receiver Company name
        </Typography>
        <FormControl size="small" variant="outlined" style={{ width: "100%" }}>
          <InputLabel htmlFor="company_name">
            <Typography>pick up address</Typography>
          </InputLabel>
          <OutlinedInput
            fullWidth
            id="company_name"
            name="company_name"
            label="company_name"
            value={orderData.company_name}
            onChange={(e) =>
              setOrderData((prev) => ({
                ...prev,
                company_name: e.target.value,
              }))
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={10} className={classes.form_group}>
        <Typography color="textSecondary" variant="body1" component="h4">
          Phone number
        </Typography>
        <FormControl size="small" variant="outlined" style={{ width: "100%" }}>
          <InputLabel htmlFor="pick_up_address">
            <Typography>Enter Phone number</Typography>
          </InputLabel>
          <OutlinedInput
            fullWidth
            id="phone_number"
            name="phone_number"
            label="phone_number"
            value={orderData.phone}
            onChange={(e) =>
              setOrderData((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </FormControl>
      </Grid>
      <Grid item container justify="center" alignItems="center" xs={10}>
        <Grid item xs={6}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => setCurrentStep(1)}
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

export default Step1Order;
