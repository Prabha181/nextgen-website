import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GoogleOAuthProvider clientId="930996233111-da7n2q3k4fnc2s2dp8aqd3gjghud2pqo.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
