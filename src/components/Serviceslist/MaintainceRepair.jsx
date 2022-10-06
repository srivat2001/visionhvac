import Ac from '../imgs/ventilation.jpg';
import cooling from '../imgs/cooling.jpg';
import { Link } from "react-router-dom";
import Rightside from '../Rightside/Topform';
import './Services.css';
import React, { useRef, useState , useEffect } from 'react';
import  handshake2  from '../imgs/handshake2.png';





function Ventilation() {
  const product_display_holder = 
  {
    mainhead:"Testing & Commisoning",
    subhead:"at Cheap Rates",
    product_list: [{
      topic:"Best Deals",
      details:[ "Adversable setting for units-",
        "100% Commisioning works to be completed",
        "Annual Maintanance Service-",
        "Labour maintanance service" ],
       imglink:handshake2
       
    }
    ]
  }
  useEffect(() => {  
    if(window.location.toString().includes("#")){

      var url = window.location.toString();
      window.location = url.replace("", "");
    }

         },[]);
  return (

    <div className='maintaince_container'><Rightside  type="productdisplay" product_display_Banner={product_display_holder}/>
  
  
    
   
    </div>

  );

}

export default Ventilation;