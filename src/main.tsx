import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { AuthProvider } from './context/authContext.tsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { theme } from './theme';
import ukrainianLocale from './helpers/localeSettings.ts';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider
        dateAdapter={AdapterLuxon}
        adapterLocale="uk"
        localeText={ukrainianLocale}
      >
        <CssBaseline />
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>
);
