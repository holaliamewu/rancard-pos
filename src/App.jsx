import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Order from "./pages/Order";
import Report from "./pages/Report";


export const AuthContext = createContext();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <>
    <AuthContext.Provider value={[isAuthenticated, setIsAuthenticated]} >
    {
      isAuthenticated ? (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/products' element={<Product />} />
              <Route path='/order' element={<Order />} />
              <Route path='/report' element={<Report />} />
            </Route>
          </Routes>
        </BrowserRouter>
      ) : (
        <Login />
      )
    }
      </AuthContext.Provider >
      </>
  );
}
