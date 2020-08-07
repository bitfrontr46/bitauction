import * as React from "react";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import { Admin } from "react-admin";
import restProvider from "ra-data-simple-rest";

import createAdminStore from "./createAdminStore";

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
      authProvider={authProvider}
      dataProvider={dataProvider}
      history={history}
      title="My Admin"
    ></Admin>
  </Provider>
);

export default UserPageApp;
