import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/themecontext/ThemeContext.jsx";
import { Langprovider } from "./context/langcontext/LangContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Langprovider>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Langprovider>
);
