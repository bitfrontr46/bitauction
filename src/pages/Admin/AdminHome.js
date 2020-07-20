import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AdminNavigation from "../../components/AdminComponents/AdminNavigation";
import AdminHomeChart1 from "./AdminHomeChart1";
import AdminHomeChart2 from "./AdminHomeChart2";
import AdminHomeChart3 from "./AdminHomeChart3";
import AdminDrawer from "./AdminDrawer";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const AdminHome = () => {
  const classes = useStyles();
  return (
    <>
      <aside style={{float:"left"}}>
        <AdminDrawer />
      </aside>
      <div style={{position:"relative", marginLeft:150}}>
      <AdminNavigation />
      </div>
      <table style={{position:"relative", marginLeft:150}}>
        <thead />
        <tbody>
          <tr>
            <td>
              <AdminHomeChart1 />
            </td>
            <td>
              <AdminHomeChart2 />
            </td>
          </tr>
          <tr>
            <td>
              <AdminHomeChart3 />
            </td>
          </tr>
        </tbody>
      </table>
      <div className={classes.paper}></div>
    </>
  );
};

export default AdminHome;
