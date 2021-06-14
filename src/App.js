import './App.css';
import React from "react"
import Routes from "./Routes/Routes";
import Product from './Components/ProductPage/Product';
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';
import LoadingLogo from './Components/LoadingLogo/LoadingLogo';


function App() {
  return (
    <div className="App">
      <Routes />
      {/* <Footer /> */}
      {/* <LoadingLogo /> */}
      {/* <Product /> */}
      {/* <NavBar /> */}
    </div>
  );
}

export default App;
