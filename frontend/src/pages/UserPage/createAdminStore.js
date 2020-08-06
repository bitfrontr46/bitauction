import { adminReducer, adminSaga, USER_LOGOUT } from "react-admin";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";

export default ({ authProvider, dataProvider, history }) => {
  const reducer = combineReducers({
    admin: adminReducer,
    router: connectRouter(history),
    // 내 Reducer 이름 추가하면 됨
  });
  const resettableAppReducer = (state, action) =>
    reducer(action.type !== USER_LOGOUT ? state : undefined, action);

  const saga = function* rootSaga() { 
    yield all(
      [
        adminSaga(dataProvider, authProvider),
        //내 saga 여기에 추가
      ].map(fork)
    );
  };
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    (process.env.NODE_ENV === "development" &&
      typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
      })) ||
    compose;

  const store = createStore(
    resettableAppReducer,
    // 내 initial state 여기에 추가
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history)
        //내 Middleware 여기에 추가
      )
      //내 enhancer 여기에 추가
    )
  );
  sagaMiddleware.run(saga);
  return store;
}; //default function
