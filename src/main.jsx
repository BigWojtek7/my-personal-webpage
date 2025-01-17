import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import routes from './routes.jsx';
import ScrollToHashElement from '@cascadia-code/scroll-to-hash-element';
import { LanguageProvider } from './contexts/LanguageContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <ScrollToHashElement />
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>
);
