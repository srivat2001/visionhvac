import "./maincontent.css";

import { initializeApp } from "firebase/app";
import logo2 from "../imgs/logo2.png";

import { useRef, useEffect, useState, useCallback } from "react";
import { useBetween } from "use-between";
import Promtscreen from "../Promtscreen/Promtscreen";
import NavControl from "./NavControl";
import Product_Display from "./Product_Display";
import Quoteform from "./Quoteform";
import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Virtual, Navigation, Pagination,Autoplay } from 'swiper';
import { useMediaQuery } from 'react-responsive'
import MediaQuery from 'react-responsive'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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


 
  /*<Product_Display product_details={product_display_holder}/>*/ 
  
  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="rightside"
    >
   <Navbar/>
  
   {props.type=="productdisplay" &&  <Product_Display product_details={props.product_display_Banner}/>}
   
  
   
   


   

    
   
       
      </div>
   
  );
};
export default Rightside;
