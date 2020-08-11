import * as React from "react";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import { Admin, Resource, ListGuesser } from "react-admin";
import restProvider from "ra-data-simple-rest";

import createAdminStore from "./createAdminStore";
import Dashboard from "./Dashboard";

const dataProvider = restProvider("https://localhost:3000");
const authProvider = () => Promise.resolve();
/* const i18nProvider = polyglotI18nProvider((locale) => {
  if (locale !== "en") {
    return messages[locale];
  }
  return defaultMessages;
}); */

const history = createHashHistory();

const UserPageApp = () => (
  <Provider
    store={createAdminStore({
      authProvider,
      dataProvider,
      history,
    })}
  >
    <Admin
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={dataProvider}
      Resource
      name="users"
      list={ListGuesser}
      history={history}
      title="My Admin"
    >
      <Resource name="users" list={ListGuesser} />
    </Admin>
  </Provider>
);

export default UserPageApp;
