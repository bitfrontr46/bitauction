import React from "react";
import AdminNavigation from "../../components/AdminComponents/AdminNavigation";
import AdminDrawer from "../../components/AdminComponents/AdminDrawer";

const AdminSettings = () => {
  return (
    <>
      <AdminDrawer />
      <div style={{ position: "relative", marginLeft: 150 }}>
        <AdminNavigation />
      </div>
    </>
  );
};

export default AdminSettings;
