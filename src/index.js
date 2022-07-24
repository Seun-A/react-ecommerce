import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';


import './index.css';
import App from './App';
import Homepage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />}>
          <Route index element={<Homepage />} />
          <Route path='/shop' element={<ShopPage />} />
          {/* No Match */}
          <Route 
            path='*'
            element = {
              <div
                className='d-flex justify-content-center align-items-center fs-2'
              >** Page In Progress **</div>
            }
          />
        </Route>

        {/* No Match */}
        <Route 
          path='*'
          element = {<div>Can't find the page you're looking for :(</div>}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
