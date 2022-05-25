import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';
import Checkout from './pages/Checkout/Checkout';
import './App.css';

const App = () => {
  return (
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
      <footer></footer>
    </div>
  );
}

export default App;
