<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);
=======
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async'; // We added this line

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* We wrapped your app in this HelmetProvider */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
>>>>>>> bbd6728eab04548842ae8036b6e641589e8eaba9
