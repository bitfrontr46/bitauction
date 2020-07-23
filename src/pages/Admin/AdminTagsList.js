import React from "react";
import useStyles from "../../styles/Style";
import AdminHomeChart4 from "./AdminHomeChart4";
import AdminDrawer from "../../components/AdminComponents/AdminDrawer";
import AdminNavigation from "../../components/AdminComponents/AdminNavigation";

const AdminTagsList = () => {
  const classes = useStyles();
  return (
    <div>
      <header className={classes.header}>
        <AdminDrawer />
      </header>
      <nav className={classes.nav}>
        <AdminNavigation />
      </nav>
      <AdminHomeChart4 />
    </div>
  );
};

export default AdminTagsList;
