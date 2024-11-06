import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';
import App from './App.jsx';
import TopNav from './components/Navigation/TopNav';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <TopNav />
      <App />
    </Router>
  </StrictMode>,
);