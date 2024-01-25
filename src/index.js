// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App';

const root = document.getElementById('root');
const rootInstance = createRoot(root);
rootInstance.render(<App />);
