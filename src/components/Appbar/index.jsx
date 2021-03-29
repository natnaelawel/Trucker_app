import {AppBar, Badge, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import Styles from "./navbar.module.css"

import MenuIcon from "@material-ui/icons/Menu";

import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useState } from 'react';


function NavBar() {
    const [auth, setAuth] = useState(null)
    const [open, setOpen] = useState(false)

    const handleClose = ()=>{
        setOpen(open => !open);
    }
    return (
        <AppBar position="static">
          <Toolbar >
            <IconButton
              edge="start"
              className={Styles.menuButton}
              color="inherit"
              aria-label="menu"
            >
            </IconButton>
            <Typography variant="h6" className={Styles.title}>
              TP
            </Typography>
            <IconButton aria-label="show 3 new notifications" color="inherit">
              <Badge badgeContent={3} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
           
            {!auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>

                <Menu
                  id="menu-appbar"
                //   anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
    );
}

export default NavBar
