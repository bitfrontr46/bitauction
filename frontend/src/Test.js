import React from "react";
import { green, yellow } from "@material-ui/core/colors";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 640,
      lg: 1280,
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      backgroundColor: yellow[900],
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: green[500],
    },
  },
}));

const Test = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>{"down(sm): red"}</Typography>
      <Typography>{"up(md): blue"}</Typography>
      <Typography>{"up(lg): green"}</Typography>
    </div>
  );
};

export default Test;
