//Page 최상단 AppBar Designing

import React from "react";
import { AppBar } from "react-admin";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    //검은색
    color: "#000000",
  },
  spacer: {
    flex: 1,
  },
};

const MyAppBar = withStyles(styles)(({ classes, ...props }) => (
  <AppBar {...props}>
    <Typography
      variant="title"
      color="inherit"
      className={classes.title}
      id="react-admin-title"
    />
    <span className={classes.spacer} />
  </AppBar>
));

export default MyAppBar;
