import "./maincontent.css";
import quoteform from "./Quoteform";

import { initializeApp } from "firebase/app";
import logo2 from "../imgs/logo2.png";
import product from "../products/photo.png";
import airvent from "../products/air_vent.png"
import ductings from "../products/ducting.png"
import logo3 from "../imgs/logo2-Inverted.png";
import { useRef, useEffect, useState, useCallback } from "react";
import { useBetween } from "use-between";
import Promtscreen from "../Promtscreen/Promtscreen";
import NavControl from "./NavControl";
import Quoteform from "./Quoteform";
import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Virtual, Navigation, Pagination,Autoplay } from 'swiper';
import { useMediaQuery } from 'react-responsive'
import MediaQuery from 'react-responsive'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ResNav from "./ResNav";
SwiperCore.use([Virtual, Navigation, Pagination,Autoplay]);



const Rightside = (props) => {
  const useSharednavbar = () => useBetween(NavControl);
  const [touchPosition, setTouchPosition] = useState(null);
  const { opennavfc, closenavfc, opennav } = useSharednavbar();
  // ...
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      closenavfc();
    }

    if (diff < -5) {
      opennavfc();
    }

    setTouchPosition(null);
  };
  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="rightside"
    >
   <Navbar/>
   <center><h1>You came at the right place!!</h1></center>
   <center><h2>What we offer?</h2></center>
   <div className="imgbanner">

   {opennav.enable?<ResNav/>:null}
   <div className="product_display_holder">

<img width={250} src={product}></img>
<div className="products_holder">
<h2>Air Conditioninng</h2>
<div className="product_name">VRF system</div>
<div className="product_name">Split system</div>
<div className="product_name">Ductable unit</div>
<div className="product_name">Ahu’s unit </div>
<button>Get Quote</button>
</div>
</div>
<div className="product_display_holder">

<img width={250} src={airvent}></img>
<div className="products_holder">
<h2>Ventilations</h2>
<div className="product_name">Axial Flow Fans</div>
<div className="product_name">Inline Cabinet Fans</div>
<div className="product_name">Propeller Fans</div>
<div className="product_name">Jet Fans</div>
<button>Get Quote</button>

</div>
</div>
<div className="product_display_holder">

<img width={250} src={ductings}></img>
<div className="products_holder" style={{top: -100}}>
<h2>Ductings</h2>
<div className="product_name">Rectangular Ducts     </div>
<div className="product_name">Spirals Ducts</div>
<div className="product_name">Oval Ducts</div>
<button>Get Quote</button>

</div>
</div>

</div>

   

    
   
       
      </div>
   
  );
};
export default Rightside;
