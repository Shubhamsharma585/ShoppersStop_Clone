import './App.css';
import React from "react"
import Routes from "./Routes/Routes";
import Product from './Components/ProductPage/Product';
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';
import LoadingLogo from './Components/LoadingLogo/LoadingLogo';
import ErrorPage from "./Components/ErrorPage/ErrorPage"

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
