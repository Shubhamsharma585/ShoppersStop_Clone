import './App.css';
import React from "react"
import NavBar from './Components/Navbar/NavBar';
import NavbarList from './Components/Navbar/NavbarList';
import Carousel from './Components/Carousel/Carousel';

const images=[
  "https://sslimages.shoppersstop.com/sys-master/root/haa/h58/16769223950366/Beauty-HP-Carousal-Arcelia2-Web.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h42/hef/16769225130014/Ode-to-Beauty-Web.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hda/h2c/16775910129694/Beauty-HP-Carousals-Day-2-Fragrances-Web.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h42/hef/16769225130014/Ode-to-Beauty-Web.jpg"
]

function App() {
  return (
    <div className="App">
      <NavBar />
      <NavbarList />
      <Carousel images={images}/>
    </div>
  );
}

export default App;
