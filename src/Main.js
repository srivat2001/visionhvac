import './App.css';
import Rightside from './components/Rightside/Topform';
import AboutUS from './components/aboutus/AboutUS';
import Services from './components/Services/Services';
import Vendors from './components/Vendors/Vendors';
import Testimonies from './components/Testimonies/Testimonies';
import Contact_us from './components/Contact_Us/Rightside';
import product from "./components/products/photo.png";
import airvent from "./components/products/air_vent.png";
import ducting from "./components/products/ducting.png";
import Footer from './components/Footer/Footer';

import Whyus from './components/Whyus/Whyus'
function Main() {
  /*import product from "../products/photo.png";
import airvent from "../products/air_vent.png"
import ductings from "../products/ducting.png"
import logo3 from "../imgs/logo2-Inverted.png"; */
  const product_display_holder = 
  {
    mainhead:"You came at the right place!!",
    subhead:"What we offer?",
    product_list: [
      {  
        topic:"Air Conditioninng",
         details:["VRF system","Split system",
          "Ductable unit",
          "Ahu’s unit"],
          imglink:product
      },     {  
        topic:"Ventilation",
         details:["VRF system","Split system",
          "Ductable unit",
          "Ahu’s unit"],
          imglink:airvent
      },     {  
        topic:"Ductings",
         details:["Rectangular Ducts",                       
         "Spirals Ducts" ,                                  
        "Oval Ducts"],
          imglink:ducting
      }
    ]
  }
  return (
    <div className='wholebodycontainer'>
      
     <Rightside type="productdisplay" product_display_Banner={product_display_holder}/>
     <AboutUS/>
     <Services/>
     <Whyus/>
     <Vendors/>
     <Contact_us/>
     <Footer/>

         </div>
  );
}

export default Main;
