import React from "react";
import ReactDOM from "react-dom";
import { App } from "./containers/App";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.querySelector("body")
);
