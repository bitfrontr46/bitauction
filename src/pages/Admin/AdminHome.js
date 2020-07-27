import React from "react";
import useStyles from "../../styles/Style";
import AdminNavigation from "../../components/AdminComponents/AdminNavigation";
import AdminHomeChart1 from "./AdminHomeChart1";
import AdminHomeChart2 from "./AdminHomeChart2";
import AdminHomeChart3 from "./AdminHomeChart3";
import AdminDrawer from "../../components/AdminComponents/AdminDrawer";

// style는 styles 폴더의 style.js로 옮김.

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
