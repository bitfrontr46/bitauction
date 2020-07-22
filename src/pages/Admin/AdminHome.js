import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AdminNavigation from "../../components/AdminComponents/AdminNavigation";
import AdminHomeChart1 from "./AdminHomeChart1";
import AdminHomeChart2 from "./AdminHomeChart2";
import AdminHomeChart3 from "./AdminHomeChart3";
import AdminDrawer from "../../components/AdminComponents/AdminDrawer";

const useStyles = makeStyles((theme) => ({
  //왼쪽 바
  header: {
    position: "absolute",
    display: "flex ",
    flexDirection: "column",
    float: "left",
  },
  //윗쪽 제목
  nav: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    marginLeft: "150px",
  },
  //내용
  section: {
    position: "relative",
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    float: "left",
    marginLeft: "180px",
  },
}));

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
      <section className={classes.section}>
        <table>
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
      </section>
    </div>
  );
};

export default AdminHome;
