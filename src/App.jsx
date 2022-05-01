import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        {/* <ItemListContainer /> */}
        <ItemDetailContainer />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
