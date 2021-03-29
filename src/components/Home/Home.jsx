import { ButtonBase, Grid, Paper, Typography } from "@material-ui/core";
import NavBar from "../Appbar";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div>
      <NavBar />
      <div className={styles.home}>
        <div className={styles.root}>
          <Paper className={styles.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={styles.image}>
                  <img
                    className={styles.img}
                    alt="complex"
                    src="https://material-ui.com/static/images/grid/complex.jpg"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Standard license
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">$19.00</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default Home;
