import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './style/style.scss'
import App from './components/app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>

  <BrowserRouter>
    <App />
  </BrowserRouter>
  
  // </React.StrictMode> 
);

