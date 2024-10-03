import React from "react";
import "./scss/main.scss";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import List from "./pages/List";
import Invoice from './pages/Invoice';
import Login from "./pages/Login";
import FormValidation from "./pages/FormValidation";
import Login2 from "./components/Login2";

function App() {
  const Layout = () => {
    return (
      <section className="flex bg-blue-bg">
        <Sidebar />
        <main className="flex flex-col w-full">
          <Header />
          <Outlet />
        </main>
      </section>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/list",
          element: <List />,
        },
        {
          path: "/invoice",
          element: <Invoice />,
        },
        {
          path: "/formvalidation",
          element: <FormValidation/>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Login2",
      element: <Login2/>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;