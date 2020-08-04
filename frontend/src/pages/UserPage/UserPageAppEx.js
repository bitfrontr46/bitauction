import React from "react";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import { ConnectedRouter } from "connected-react-router";
import {
  AuthContext,
  DataProviderContext,
  TranslationProvider,
  Resource,
} from "react-admin";
// import { Switch, Route } from "react-router-dom";
import withContext from "recompose/withContext";
import restProvider from "ra-data-simple-rest";
import defaultMessages from "@spectrum/ra-language-korean";
import polyglotI18nProvider from "ra-i18n-polyglot";
import { ThemeProvider } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { checkPropTypes } from "prop-types";

import createAdminStore from "./createAdminStore";

//dependencies
const dataProvider = restProvider("https://localhost:3000");
const authProvider = () => Promise.resolve();

const i18nProvider = polyglotI18nProvider((locale) => {
  if (locale !== "en") {
    return messages[locale];
  }
  return defaultMessages;
});
const history = createHashHistory();

function UserPageApp() {
  return (
    <Provider
      store={createAdminStore({
        authProvider,
        dataProvider,
        history,
      })}
    >
      <AuthContext.Provider value={authProvider}>
        <DataProviderContext.Provider value={dataProvider}>
          <TranslationProvider locale={locale} i18nProvider={i18nProvider}>
          <ThemeProvider>
            <Resource name="posts" intent="registration" />
            <Resource name="contents" intent="registration" />
            <Resource name="users" intent="registration" />
            <AppBar position="static" color="default">
              <Toolbar>
                <Typography variant="h5" color="inherit">
                  My Admin
                </Typography>
              </Toolbar>
            </AppBar>
            <ConnectedRouter history={history}>{/* Routes */}</ConnectedRouter>
          </ThemeProvider>
          </TranslationProvider>
        </DataProviderContext.Provider>
      </AuthContext.Provider>
    </Provider>
  );
}

export default withContext(
  {
    authProvider: checkPropTypes.func,
  },
  () => ({ authProvider })
)(UserPageApp);
