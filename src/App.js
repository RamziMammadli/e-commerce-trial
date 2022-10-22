import './App.css';
import Navbar from './components/navbar';
import Search from './components/search';
import Categories from './components/categories';
import Banner from './components/banner';
import Products from './components/products';
import Footer from './components/footer';
import Toysproducts from './components/toysproducts';
import Bestseller from './components/bestsellerproduct';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
      <Categories/>
      <Banner/>
      <div className="text">
        <p>Products</p>
      </div>
      <Products/>
      <div className="text">
        <p>For KIDS</p>
      </div>
      <Toysproducts/>
      <div className="text">
        <p>BESTSELLER</p>
      </div>
      <Bestseller/>
      <Footer/>
    </div>
  );
}

export default App;
