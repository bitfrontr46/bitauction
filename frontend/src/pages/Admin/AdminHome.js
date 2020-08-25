import React from "react";
import useStyles from "../../styles/Style";
import AdminNavigation from "../../components/AdminComponents/AdminNavigation";
import AdminHomeChart1 from "./AdminHomeChart1";
import AdminHomeChart2 from "./AdminHomeChart2";
import AdminHomeChart3 from "./AdminHomeChart3";
import AdminDrawer from "../../components/AdminComponents/AdminDrawer";

// style는 styles 폴더의 style.js로 옮김.

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

function NestedGrid() {
  const classes = useStyles();
  return (
    <div style={{ display: "flex" }}>
      <Grid container spacing={2} wrap="nowrap">
        <Grid item lg={5} md={4} sm={6} xs={12}>
          <Paper className={classes.paper}>
            <AdminHomeChart1 />
          </Paper>
        </Grid>
        <Grid item lg={5} md={4} sm={6} xs={12}>
          <Paper className={classes.paper}>
            <AdminHomeChart2 />
          </Paper>
        </Grid>
        <Grid item lg={5} md={4} sm={6} xs={12}>
          <Paper className={classes.paper}>
            <AdminHomeChart3 />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

//여기까지

const AdminHome = () => {
  const classes = useStyles();
  return (
    <div>
      <header className={classes.header}>
        <AdminDrawer />
      </header>
      <nav className={classes.nav}>
        <AdminNavigation />
      </nav>
      <Container className={classes.form}>
      <NestedGrid />
      </Container>
    </div>
  );
};

export default AdminHome;
