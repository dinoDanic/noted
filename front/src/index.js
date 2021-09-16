import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";

import { store } from "./redux/store";

import "./theme/global.scss";
import "./theme/theme.scss";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
