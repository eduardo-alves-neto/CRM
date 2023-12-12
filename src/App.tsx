import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { LigthTheme } from "./shared/themes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { MenuDrawer } from "./shared/components";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MenuDrawer />
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
};
