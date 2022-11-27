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
import product_deatils_ventilation from "./components/imgs/product_details_banner_ventilation.jpg"
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
         details:[<a href='https://toshiba-india.com/' target={"blank"}> VRF system</a>,<a href='https://www.toshibaac.in/cassette/spi-classic/RAV-GV1801UP-IN-RAV-GV1801AP.aspx?utm_source=Search&utm_medium=3HP4star&utm_campaign=SPI_classic&utm_term=CPC&utm_content=Air_Conditioners&gclid=CjwKCAjwkaSaBhA4EiwALBgQaAI-IUZ7srnY-i3Uo4CuIfur64zkg_PcEbIiVWEpvpjNsopt3X_xiRoCCWkQAvD_BwE
         2)	https://www.carriermideaindia.com/product/air-conditioner/Carrier
         ' target={"blank"}>Split system</a>,
          <a href='https://www.hitachiaircon.com/in/ranges/ducted-air-conditioners' target={"blank"} >Ductable unit</a>,
          <a href='https://www.daikin.eu/en_us/product-group/air-handling-units.html'target={"blank"}> Ahu’s unit</a>],
          imglink:product,
          main_topic_link:"Cooling",
          bgimg:"https://dwxbwps5boihg.cloudfront.net/topic/post_picture/2234/benefits_of_sunlight_property_home_propsocial1.jpg"

      },     {  
        topic:"Ventilation",
         details:[[<a href='#'> Axial Flow Fans</a>,0]
          
         ,                       
        "Inline Cabinet Fans",                      
        "Propeller Fans"  ,
        "Jet Fans"],
          imglink:airvent,
          main_topic_link:"Ventilation",
          bgimg:product_deatils_ventilation
      },     {  
        topic:"Ductings",
        details:[
          
                             
       <a href='http://sevenstaraircon.in/index.php' target={"blank"}>Rectangular</a>,                      
       <a href='https://www.mskairductindustries.com/' target={"blank"}>Spirals Ducts</a>  ,
       <a href='https://www.cosmichvac.com/'>Oval Ducts</a> ],
          imglink:ducting,
          main_topic_link:"Ventilation",
          bgimg:"https://dwxbwps5boihg.cloudfront.net/topic/post_picture/2234/benefits_of_sunlight_property_home_propsocial1.jpg"
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
