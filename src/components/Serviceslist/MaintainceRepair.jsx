import Rightside from '../Rightside/Topform';
import './Services.css';
import React, { useRef, useState , useEffect } from 'react';
import Footer from '../Footer/Footer';




function Ventilation() {
  const product_display_holder = 
  {
    mainhead:"Testing & Commisoning",
    subhead:"at Cheap Rates",
    product_list: [{
      topic:"",
      details:[
        "100% Commisioning works to be completed",
        "Annual Maintanance Service-",
        "Labour maintanance service" ],
       imglink:""
       
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
   <div>
    <div className='maintaince_container'><Rightside  type="productdisplay" product_display_Banner={product_display_holder}/>
  
  
    
   
    </div>
    <Footer/>
    </div>
  );

}

export default Ventilation;