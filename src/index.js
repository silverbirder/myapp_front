import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createClient, Provider } from "urql";

const CLIENT_SECRET = process.env.REACT_APP_FAUNA_ADMIN_KEY;
const FAUNA_GRAPHQL_BASE_URL = `https://graphql.fauna.com/graphql`;

const client = createClient({
  url: FAUNA_GRAPHQL_BASE_URL,
  fetchOptions: () => {
    return {
      headers: {
        authorization: `Bearer ${CLIENT_SECRET}`,
      },
    };
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
