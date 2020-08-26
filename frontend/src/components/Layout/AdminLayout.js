// Drawer가 Admin page들만 나오도록 설정
// http://www.uxshaper.com/different-layouts-with-react-router/
import React from "react";
import AdminDrawer from "../../components/Admin/AdminDrawer";
import { Route } from "react-router-dom";

const AdminLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <div>
          <AdminDrawer />
          <Component {...matchProps} />
        </div>
      )}
    />
  );
};

export default AdminLayout;
