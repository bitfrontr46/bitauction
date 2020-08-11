import * as React from "react";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import { Admin, Resource, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import createAdminStore from "./createAdminStore";
import Dashboard from "./Dashboard";
import { UserList } from "./users";
import { PostList, PostCreate } from "./posts";

import { BrowserRouter, Switch } from "react-router-dom";

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
  <BrowserRouter>
    <Switch>
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
          history={history}
          title="My Admin"
        >
          <Resource
            name="posts"
            list={PostList}
            edit={EditGuesser}
            create={PostCreate}
          />
          <Resource name="users" list={UserList} />
        </Admin>
      </Provider>
    </Switch>
  </BrowserRouter>
);

export default UserPageApp;
