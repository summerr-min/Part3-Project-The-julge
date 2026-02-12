import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { GlobalStyles } from '@/styles/GlobalStyles';
import App from './App';

import 'spoqa-han-sans/css/SpoqaHanSansNeo.css';

import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './components/common/Toast/Toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
