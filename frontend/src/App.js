import React from "react";
import AdminRoutes from "./routes/AdminRoutes";
import GeneralRoutes from "./routes/GeneralRoutes";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

//라우팅 참고: https://learnwithparam.com/blog/basic-routing-in-react-router/
//css reset 참고하기.
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={AdminRoutes} />
          <Route path="/" component={GeneralRoutes} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
