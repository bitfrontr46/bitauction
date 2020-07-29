import React from "react";
import AdminRoutes from "./routes/AdminRoutes";
import GeneralRoutes from "./routes/GeneralRoutes";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//css reset 참고하기.
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/adminhome" component={AdminRoutes} exact />
          <Route path="/" component={GeneralRoutes} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
