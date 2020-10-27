import React from "react";
import ReactDOM from "react-dom";
import { defineCustomElements } from "@ionic/pwa-elements/loader";

import App from "./App";

import MemoriesContextProvider from "./data/MemoriesContextProvider";

ReactDOM.render(
  <MemoriesContextProvider>
    <App />
  </MemoriesContextProvider>,
  document.getElementById("root")
);

defineCustomElements(window);
