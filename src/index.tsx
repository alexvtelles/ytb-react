import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from './shared/contexts/ThemeContext';




ReactDOM.render(
  <React.StrictMode>
    <AppThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

