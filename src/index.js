import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';


import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='*' element={<App />} />

        {/* No Match */}
        <Route 
          path='*'
          element = {<div>Can't find the page you're looking for :(</div>}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
