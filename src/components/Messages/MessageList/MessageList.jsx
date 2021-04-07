import {
  Avatar,
  Box,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  OutlinedInput,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import classes from "./messagelist.module.scss";

function MessageList() {
  return (
    <Box className={classes.root}>
      <Box className={classes.message_area}>
        <List className={classes.message_list}>
          {[1].map((message, index) => (
            <>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    className={classes.avatar}
                    src="/images/avatar.jpeg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Hey, I am Good! What about you ?"
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textSecondary"
                    >
                      09:30
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  align="right"
                  style={{ margin: "0 20px" }}
                  primary="Hey, I am Good! What about you ?"
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textSecondary"
                    >
                      09:30
                    </Typography>
                  }
                />
                <ListItemAvatar>
                  <Avatar
                    className={classes.avatar}
                    src="/images/friend1.jpg"
                  />
                </ListItemAvatar>
              </ListItem>
            </>
          ))}
          <Box my={3}>
            <Divider light />
            <Typography align="center" variant="body2" color="textSecondary">Today</Typography>
          </Box>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.avatar} src="/images/avatar.jpeg" />
            </ListItemAvatar>
            <ListItemText
              primary="Hey, I am Good! What about you ?"
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textSecondary"
                >
                  09:30
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              align="right"
              style={{ margin: "0 20px" }}
              primary="Hey, I am Good! What about you ?"
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textSecondary"
                >
                  09:30
                </Typography>
              }
            />
            <ListItemAvatar>
              <Avatar className={classes.avatar} src="/images/friend1.jpg" />
            </ListItemAvatar>
          </ListItem>
        </List>
      </Box>
      <Box>
        <Divider light />
      </Box>
      <Box className={classes.message_input}>
        <FormControl fullWidth variant="outlined" color="primary" size="small">
          <OutlinedInput
            color="primary"
            variant="outlined"
            id="send message"
            placeholder="Message people to this channel"
            className={classes.message_input_outlined}
            endAdornment={
              <InputAdornment position="end">
                <Box display="flex">
                  <Box>
                    <IconButton aria-label="toggle password visibility">
                      <InsertEmoticonIcon />
                    </IconButton>
                  </Box>
                  <Box>
                    <IconButton aria-label="toggle password visibility">
                      <AttachFileIcon />
                    </IconButton>
                  </Box>
                  <Box>
                    <IconButton
                      color="primary"
                      aria-label="toggle password visibility"
                    >
                      <SendOutlinedIcon />
                    </IconButton>
                  </Box>
                </Box>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    </Box>
  );
}

export default MessageList;
