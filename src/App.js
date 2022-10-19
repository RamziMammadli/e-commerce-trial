import './App.css';
import Navbar from './components/navbar';
import Search from './components/search';
import Categories from './components/categories';
import Banner from './components/banner';
import Products from './components/products';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
      <Categories/>
      <Banner/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
