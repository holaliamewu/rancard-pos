import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SignupAndLogin from "./pages/SignupAndLogin";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    isAuthenticated ? (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    ) : (
      <SignupAndLogin />
    )
  );
}
