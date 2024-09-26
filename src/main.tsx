import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './normalize.css';
import './index.css';
import App from './components/App/App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <BrowserRouter basename='/portfolio'>
      <App />
    </BrowserRouter>
  </StrictMode>
);
