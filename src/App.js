import './App.css';
import Navbar from './components/navbar';
import Search from './components/search';
import Categories from './components/categories';
import Banner from './components/banner';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
      <Categories/>
      <Banner/>
    </div>
  );
}

export default App;
