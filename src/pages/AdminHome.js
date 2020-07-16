import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import HomeChart1 from "./AdminHomeChart1";
import HomeChart2 from "./AdminHomeChart2";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AdminHome = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <HomeChart1 />
      <HomeChart2 />
      <div className={classes.paper}></div>
    </Container>
  );
};

export default AdminHome;
