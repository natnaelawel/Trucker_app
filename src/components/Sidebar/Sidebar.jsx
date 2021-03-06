import { Divider, Grid, List, ListItem, ListItemText } from "@material-ui/core";
import classes from "./sidebar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Sidebar() {
  const [currentPathName, setCurrentPathName] = useState("/");
  const router = useRouter();
  useEffect(() => {
    const name = router.pathname;
    setCurrentPathName(name);
  }, [router]);
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
              selected={"/" == currentPathName}
            >
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Divider light />
          <Link href="/orders/active">
            <ListItem
              button
              component="a"
              className={classes.list_item}
              selected={"/orders/active" == currentPathName}
            >
              <ListItemText primary="Active Orders" />
            </ListItem>
          </Link>
          <Divider light />
          <Link href="/orders/history">
            <ListItem
              button
              component="a"
              className={classes.list_item}
              selected={"/orders/history" == currentPathName}
            >
              <ListItemText primary="History" />
            </ListItem>
          </Link>
          <Divider light />
          <Link href="/messages">
            <ListItem
              button
              component="a"
              className={classes.list_item}
              selected={"/messages" == currentPathName}
            >
              <ListItemText primary="Messages" />
            </ListItem>
          </Link>
          <Divider light />
          <Link href="/payments">
            <ListItem
              button
              className={classes.list_item}
              selected={"/payments" == currentPathName}
            >
              <ListItemText primary="Payments" />
            </ListItem>
          </Link>
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

          <Link href="/supports">
            <ListItem
              button
              component="a"
              className={classes.list_item}
              selected={"/supports" == currentPathName}
            >
              <ListItemText primary="Support" />
            </ListItem>
          </Link>
          <Divider light />
          <Link href="/profile">
            <ListItem
              button
              component="a"
              className={classes.list_item}
              selected={"/profile" == currentPathName}
            >
              <ListItemText primary="Profile Settings" />
            </ListItem>
          </Link>
          <Divider light />
          <Link href="/auth">
            <ListItem
              button
              component="a"
              className={classes.list_item}
              selected={"/logout" == currentPathName}
            >
              <ListItemText primary="Log Out" />
            </ListItem>
          </Link>
        </List>
      </Grid>
    </Grid>
  );
}

export default Sidebar;
