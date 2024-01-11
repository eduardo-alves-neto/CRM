import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { useDrawerContext } from "../shared/contexts";
import { Home } from "../pages/Home";
import { TikTok } from "../pages/TikTok";
export const AppRoutes = () => {
    
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Home/>} />

      <Route path="/tik-tok" element={<TikTok/>}/>
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
