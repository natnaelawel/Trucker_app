import { Divider, Grid, List, ListItem, ListItemText } from "@material-ui/core";
import classes from "./sidebar.module.scss";
import Link from "next/link"
function Sidebar() {
  return (
    <Grid
      container
      justify="space-between"
      direction="row"
      alignItems="stretch"
      item
      xs={6}
      sm={2}
      className={classes.sidebar}
    >
      <Grid item xs={12} className={classes.sidebar_menu}>
        <List
          component="nav"
          aria-label="main side bar menus"
          className={classes.menulists}
        >
          <Link href="/">
            <ListItem
              button
              component="a"
              className={classes.list_item}
              selected={0 === 0}
            >
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Divider light />
          <ListItem button className={classes.list_item}>
            <ListItemText primary="Active Orders" />
          </ListItem>
          <Divider light />

          <ListItem button className={classes.list_item}>
            <ListItemText primary="History" />
          </ListItem>
          <Divider light />

          <ListItem button className={classes.list_item}>
            <ListItemText primary="Messages" />
          </ListItem>
          <Divider light />

          <ListItem button className={classes.list_item}>
            <ListItemText primary="Invoices" />
          </ListItem>
          <Divider light />
        </List>
      </Grid>

      <Grid item xs={12} className={classes.sidebar_action}>
        <List
          component="nav"
          aria-label="side bar menus"
          className={classes.menulists}
        >
          <Divider light />

          <ListItem button className={classes.list_item}>
            <ListItemText primary="Support" />
          </ListItem>
          <Divider light />

          <ListItem button className={classes.list_item}>
            <ListItemText primary="Profile Settings" />
          </ListItem>
          <Divider light />

          <ListItem button className={classes.list_item}>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

export default Sidebar;
