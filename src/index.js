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
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';

import { Provider } from 'react-redux';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<App />}>
            <Route index element={<Homepage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route 
              exact
              path='/signin' 
              element={
                <SignInUpPage />  // THIS IS WHERE I WANT MY NAVIGATE TO BE 
              } 
            />
            {/* No Match */}
            <Route 
              path='*'
              element = {
                <div
                  className='d-flex justify-content-center align-items-center fs-2'
                >Can't find the page you're looking for :(</div>
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
    </Provider>
  </React.StrictMode>
);
