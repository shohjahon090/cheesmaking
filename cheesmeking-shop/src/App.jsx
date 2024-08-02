import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Mahsulot from './components/Mahsulot ichi';
import Korzinka from './components/Korzinka';
import Login from './components/Login';
import Sign from './components/Sign in';
import { useState } from 'react';
import Card from './components/Card/Index'

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Header length={cart.length} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card' element={<Card addToCart={addToCart} />} />
        <Route path='/mahsulot' element={<Mahsulot />} />
        <Route path='/korzinka' element={<Korzinka cart={cart} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Sign />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

