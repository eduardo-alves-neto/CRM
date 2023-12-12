import { Button } from "@mui/material";
import { Routes , Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts";
import React from "react";
import { useDrawerContext } from "../shared/contexts";
export const AppRoutes = () =>{
    const {toggleDrawerOpen} = useDrawerContext();
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<>
            <Button variant="contained" color={"primary"} onClick={toggleDrawerOpen}>teste</Button></>}/>

            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>

        </Routes>
    );
}