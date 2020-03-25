import React from 'react';
import './App.css';
import './swiper.css';
import './magnific-popup.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cards from "./components/cards/cards";
import Copiright from "./components/copiright/copiright";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Nav from "./components/navbar/nav";
import Newsletter from "./components/newsletter/newsletter";
import Slider from "./components/slider/slider";
import Slider2 from "./components/slider2/slider2";
import Snipperwrapper from "./components/snipperwrapper/snipperwrapper";
import Tabs from "./components/tabs/tabs";
import Textcontainer from "./components/textcontainer/textcontainer";
import Videocontainer from "./components/videocontainer/videocontainer";

function App() { 
  return (
    <div>
      
      <Nav/>
      <Header/>
      <Slider/>
      <Cards/>
      <Tabs/>
      <Textcontainer/>
      <Videocontainer/>
      
      <Newsletter/>
      <Footer/>
      <Copiright/>
      
    </div>
  );
}

export default App;
