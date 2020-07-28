import React from "react";
import AdminRoutes from "./routes/AdminRoutes";
import GeneralRoutes from "./routes/GeneralRoutes";
import 'antd/dist/antd.css'

//css reset 참고하기.
function App() {
  return (
    <>
      <AdminRoutes />
      <GeneralRoutes />
    </>
  );
}

export default App;
