import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "./App";
import "antd/dist/reset.css";
import "normalize.css";
import "@/assets/css/index.less";

import store from "./store";
import theme from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Suspense fallback="loading...">
        <HashRouter>
          <App />
        </HashRouter>
      </Suspense>
    </ThemeProvider>
  </Provider>

  // </React.StrictMode>
);
