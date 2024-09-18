import React from "react";
import "./scss/main.scss";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import List from "./pages/List";
import Invoice from './pages/Invoice';
import Login from "./pages/Login";

function App() {
  const Layout = () => {
    return (
      <section className="flex">
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
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;