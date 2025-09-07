import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import { Authenticator } from "@aws-amplify/ui-react";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
    {/* <Authenticator>
      <App />
    </Authenticator> */}
  </React.StrictMode>
);