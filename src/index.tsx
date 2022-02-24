import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import { LightTheme } from './shared/themes';



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

