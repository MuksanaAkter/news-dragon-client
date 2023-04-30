import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./layous/Main.jsx";
import Home from "./pages/Home.jsx";

import Category from "./pages/Category.jsx";
import NewsLayout from "./layous/NewsLayout.jsx";
import News from "./pages/News.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Loginlayout from "./layous/Loginlayout.jsx";
import Login from "./pages/common/login.jsx";
import Register from "./pages/common/Register.jsx";
import PrivateRoute from "./providers/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginlayout></Loginlayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "category",
    element: <Main />,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element:<PrivateRoute><News></News></PrivateRoute> ,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

    <App />
  </React.StrictMode>
);
