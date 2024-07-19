import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import LoginSignUp from './pages/LoginSignUp'
import Cart from './pages/Cart'

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/men' element={<ShopCategory/>}/>
      <Route path='/women' element={<ShopCategory/>}/>
      <Route path='/kids' element={<ShopCategory/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productid' element={<Product/>}/>
      </Route>
      <Route path='/login' element={<LoginSignUp/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
