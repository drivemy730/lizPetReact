// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';  // Import the App component

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


// Render the App component into the 'root' div in index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

