import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import FontStyle from "./styles/FontStyle";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FontStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
