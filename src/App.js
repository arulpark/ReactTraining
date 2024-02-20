
import './App.css';
import './index.css'
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contactus from './components/contactus/Contactus';
import Login from './login/Login';
import Counter from './components/increment/IncrementDecrement';
import Products from './components/products/Products';
// import DataReducer from './components/DataReducer';

function App() {
  return (
    <div className="App">
     <Nav />
     <Header />
     <About />
     <Portfolio />
     <Contactus />
     <Products />
     {/* <Login /> */}
     <Counter />
     {/* <DataReducer /> */}
     
    </div>
  );
}

export default App;
