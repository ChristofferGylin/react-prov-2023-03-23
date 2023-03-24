import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "hooks-for-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./question6/Home";
import Done from "./question6/Done";
import App from "./question6/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/done/:id",
        element: <Done />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
