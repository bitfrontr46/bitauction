import React from "react";
import AdminRoutes from "./routes/AdminRoutes";
import GeneralRoutes from "./routes/GeneralRoutes";


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
