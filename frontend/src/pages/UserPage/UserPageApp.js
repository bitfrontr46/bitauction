import * as React from "react";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import { Admin, Resource, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import createAdminStore from "./createAdminStore";
import Dashboard from "./Dashboard";
import { UserList } from "./users";
import { PostList, PostCreate, PostEdit } from "./posts";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";

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
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={dataProvider}
      history={history}
      title="Admin Page"
    >
      <Resource
        name="posts"
        list={PostList}
        edit={EditGuesser}
        create={PostCreate}
      />
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
      <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
  </Provider>
);

export default UserPageApp;
