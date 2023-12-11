import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "@emotion/react";
import { LigthTheme } from "./shared/themes";

export const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={LigthTheme} >
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};
