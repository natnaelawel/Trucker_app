import { Grid } from "@material-ui/core";
import NavBar from "../../Appbar";
import Sidebar from "../../Sidebar/Sidebar";
import CustomGoogleMap from "../CustomGoogleMap";
import Step1Order from "./Step1/Step1";
import Step2Order from "./Step2/Step2";
import classes from "./orderpickup.module.scss";
import { useState } from "react";
import Step3Order from "./Step3/Step3";
function OrderPickup() {
  const [currentStep, setCurrentStep] = useState(0);
  const [orderData, setOrderData] = useState({})

  const renderCurrentStep = () => {
    if (currentStep == 0) {
      return (
        <Step1Order
          orderData={orderData}
          setOrderData={setOrderData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      );
    } else if (currentStep == 1) {
      return (
        <Step2Order
          orderData={orderData}
          setOrderData={setOrderData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      );
    } else if (currentStep == 2) {
      return (
        <Step3Order
          orderData={orderData}
          setOrderData={setOrderData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      );
    }
    return null
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12} container className={classes.order}>
        <Sidebar />
        <Grid item xs={10} className={classes.content} container>
          {renderCurrentStep()}
          <Grid item xs={6} className={classes.map}>
            <CustomGoogleMap />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default OrderPickup;
