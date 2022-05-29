import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './store/CartContext';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import Cart from './pages/Cart/Cart';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Checkout from './pages/Checkout/Checkout';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <header>
            <NavBar />
          </header>
          <main>
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
