import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/Error";
import GoatHouse from "./GoatHouse";
import GoatPage from "./Components/GoatPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/goathouse",
    element: <GoatHouse />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/goathouse/:id",
    element: <GoatPage />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);