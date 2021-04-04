import {
  Button,
  ButtonBase,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import NavBar from "../Appbar";
import Sidebar from "../Sidebar/Sidebar";
import CustomGoogleMap from "./CustomGoogleMap";
import classes from "./Home.module.scss";

function Home() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12} container className={classes.home}>
        <Sidebar />
        <Grid item xs={10} className={classes.maparea}>
          <Grid item xs={12} className={classes.map}>
            <CustomGoogleMap />
          </Grid>
          <Grid item xs={12}>
            <Link href="/orders/create">
              <a class="link_element">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  <Typography variant="body1" color="textPrimary">
                    Order A Pickup
                  </Typography>
                </Button>
              </a>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
