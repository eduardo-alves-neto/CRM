import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { useDrawerContext } from "../shared/contexts";
import { Home } from "../pages/Home";
import Users from "../pages/users";
import Products  from "../pages/products";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Home />} />

      <Route path="/users" element={<Users />} />
      
      <Route path="/products" element={<Products />} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
