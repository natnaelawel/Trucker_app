import {
  AppBar,
  Box,
  Grid,
  InputBase,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React from "react";
import NavBar from "../../Appbar";
import Sidebar from "../../Sidebar/Sidebar";
import OrderRow from "../ActiveOrders/OrderRow/OrderRow";
import classes from "./orderhistory.module.scss";
import SearchIcon from "@material-ui/icons/Search";
import classnames from "classnames";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function OrderHistory() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.navbar}>
        <NavBar />
      </Grid>
      <Grid item xs={12} container className={classes.main}>
        <Sidebar />
        <Grid item xs={10} className={classes.content}>
          <Box className={classes.tabs}>
            <Tabs
              value={selectedTab}
              onChange={handleChange}
              aria-label="order status"
              indicatorColor="primary"
            >
              <Tab label="Completed" id="completed" aria-controls="completed" />
              <Tab
                label="Scheduled Orders"
                id="scheduled"
                aria-controls="scheduled"
              />
            </Tabs>
          </Box>

          <Box
            className={classes.search}
            my={2}
            width="50%"
            color="text.secondary"
          >
            <div className={classes.searchField}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search orders..."
                className={classnames(classes.inputRoot, classes.inputInput)}
                inputProps={{ "aria-label": "Search orders" }}
              />
            </div>
          </Box>

          <Box className={classes.completed}>
            <TabPanel value={selectedTab} index={0}>
              {[1, 2, 3, 4, 5, 6].map((row, index) => (
                <OrderRow key={index} />
              ))}
            </TabPanel>
          </Box>

          <Box className={classes.scheduled}>
            <TabPanel value={selectedTab} index={1}>
              {[1, 2].map((row, index) => (
                <OrderRow key={index} />
              ))}
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default OrderHistory;
