import React from "react";
import AdminNavigation from "../../components/admin/AdminNavigation";
import AdminDrawer from "../../components/admin/AdminDrawer";

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
