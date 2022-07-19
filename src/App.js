import { Link, Route, Routes, } from 'react-router-dom';
import './App.css';
import Homepage from './pages/home/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div className="App">
      <nav className='navbar p-3 d-flex justify-content-around' style={{borderBottom: '1px solid black'}}>
        <Link to='/'>HOME</Link> {'|'}
        <Link to='/shop'>SHOP</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
