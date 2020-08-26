import React from "react";
import { Route, Redirect } from "react-router-dom";
import AdminLayout from "./Layout/AdminLayout";

const AdminRoute = ({ component: Component, ...rest }) => {
  const adminIsLogin = () => {
    if (localStorage.getItem("adminIsLogin") === "true") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Route
      {...rest}
      render={() => {
        if (adminIsLogin()) {
          return (
            <AdminLayout>
              <Component />
            </AdminLayout>
          );
        } else {
          return <Redirect to="/admin/login" />;
        }
      }}
    />
  );
};
export default AdminRoute;
