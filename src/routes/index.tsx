import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Users from "../pages/users";
import Products  from "../pages/products";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { PostUsers } from "../pages/users/handler";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />

      <Route path="/users" element={<Users />} />
      <Route path="/users/create" element={<PostUsers/>}/>
      
      <Route path="/products" element={<Products />} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
