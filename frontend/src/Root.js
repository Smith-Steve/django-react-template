import React from "react";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";

import rootReducer from "./Reducer";

const Root = ({ children, initialState = {} }) => {
  const history = createBrowserHistory({
    basename: "",
  });
  const middleware = [thunk, routerMiddleware(history)];
  console.log("History: ", history);
  console.log("Middleware: ", middleware);

  const store = createStore(
    rootReducer(history),
    initialState,
    applyMiddleware(...middleware)
  );
  console.log("Children: ", children);
  console.log("Store: ", store);

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>{children}</ConnectedRouter>
    </Provider>
  );
};

export default Root;
