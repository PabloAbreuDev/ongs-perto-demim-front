import React from "react";
import ReactDOM from "react-dom/client";
import OngsProvider from "./context/ongs";
import reportWebVitals from "./reportWebVitals";
import Global from "./styles/global";
import { App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global />
    <OngsProvider>
      <App />
    </OngsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
