import * as React from "react";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import createAdminStore from "./createAdminStore";
import Dashboard from "./Dashboard";
import Menu from "./Menu";
import CS from "./CS/index";
import posts from "./posts/index";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
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
      menu={Menu}
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={dataProvider}
      history={history}
      title="Admin Page"
    >
      <Resource name="Posts" {...posts} />
      <Resource name="Support" {...CS} />
    </Admin>
  </Provider>
);

export default UserPageApp;
