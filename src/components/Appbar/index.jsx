import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import classes from "./navbar.module.scss";

import MenuIcon from "@material-ui/icons/Menu";

import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useState } from "react";
import Image from "next/image";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "next/link";

function NavBar() {
  const [auth, setAuth] = useState(null);
  const [isOpen, setIsOpen] = useState(null);

  const handleClick = (event) => {
    setIsOpen(event.currentTarget);
  };

  const handleClose = () => {
    setIsOpen(null);
  };

  return (
    <AppBar
      elevation={1}
      className={classes.appbar}
      color="transparent"
      position="static"
    >
      <Toolbar className={classes.toolbar}>
        <Link href="/">
          <a>
            <IconButton
              edge="start"
              className={classes.nav_brand}
              color="inherit"
              aria-label="menu"
            >
              <Image
                src="/images/another.svg"
                width={50}
                height={50}
                objectFit="cover"
              />
            </IconButton>
          </a>
        </Link>
        {!auth && (
          <div className={classes.nav_items}>
            <IconButton aria-label="show 3 new notifications">
              <Badge badgeContent={3} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton
              onClick={handleClick}
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // prefix
            >
              <ExpandMoreIcon color="primary" />
            </IconButton>
            <Avatar
              alt="profile Photo"
              src="/images/avatar.jpeg"
              onClick={handleClick}
              aria-controls="menu-appbar"
              aria-haspopup="true"
            >
              N
            </Avatar>

            <Typography
              className={classes.nav_item}
              variant="body1"
              component="h2"
              color="primary"
            >
              Susan Storm
            </Typography>
            <Menu
              id="simple-menu"
              anchorEl={isOpen}
              keepMounted
              open={Boolean(isOpen)}
              onClose={handleClose}
              elevation={0}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
