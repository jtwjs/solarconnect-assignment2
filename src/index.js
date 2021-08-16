import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components/macro";

import App from "./App";

import GlobalStyle from "Styles/GlobalStyle";
import { theme } from "Styles/Theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
