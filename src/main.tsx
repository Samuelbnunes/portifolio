import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './App.module.css'; // Carrega as variáveis globais

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
