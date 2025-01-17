import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import routes from './routes.jsx';
import ScrollToHashElement from '@cascadia-code/scroll-to-hash-element';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScrollToHashElement />
    <RouterProvider router={router} />
  </React.StrictMode>
);
