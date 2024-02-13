import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Header from "../layouts/header";
import RejisterPage from "../pages/RejisterPage";

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/rejisterPage", element: <RejisterPage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
