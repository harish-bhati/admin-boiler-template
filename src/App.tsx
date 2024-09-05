import React from "react";
import "./scss/main.scss";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import List from "./pages/List";

function App() {
  return (
    <Router>
      {/* <Sidebar /> */}
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;