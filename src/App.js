import './App.css';
import Navbar from './components/navbar';
import Search from './components/search';
import Categories from './components/categories';
import Banner from './components/banner';
import Product from './components/product';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
      <Categories/>
      <Banner/>
      <Product/>
    </div>
  );
}

export default App;
