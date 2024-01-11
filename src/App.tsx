import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { MenuDrawer } from "./shared/components";
import { DrawerProvider } from "./shared/contexts";
import React from "react";

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>

          <MenuDrawer>
            <AppRoutes />
          </MenuDrawer>
          
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
