import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "@/index.css";
import store from "@/entities/Project/model/store";
import AppRoutes from "./app/routes";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>,
);
