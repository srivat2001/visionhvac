import { render } from "@testing-library/react";
import { initializeApp } from "firebase/app";
import { useRef, useEffect, useState, useCallback } from "react";
import {
  getDatabase,
  ref,
  set,
  get,
  onValue,
  child,
  push,
} from "firebase/database";
import { useMediaQuery } from "usehooks-ts";
import { Link, useLocation, Outlet, to } from "react-router-dom";
import Promtscreen from "../Promtscreen/Promtscreen";
import cooling from "../imgs/cooling.jpg";
import { useBetween } from "use-between";
import NavControl from "./NavControl";
import ventilation2 from "../imgs/ventilation2.jpeg";
import "./navbar.css";

const servicelistnavbarmain = [
    {
      values: [
        "Car parking Area",
        "Basement",
        "Electrical Panel Room",
        "Restroom",
      ],
      imglink: ventilation2,
      name: "Ventilation",
      link: "Ventilation",
    },
    {
      values: [
        "Hospitals",
        "Residence",
        "Shopping Malls",
        "Server Area",
        "Pharmacy",
      ],
      imglink: cooling,
      name: "Cooling",
      link: "Cooling",
    },
    {
      values: [
        "Adversable setting for units",
        "Commisioning works to be completed",
        "Annual Maintanance Service",
        "Labour maintanance service ",
      ],
      imglink: require("../imgs/handShake.jpg"),
      name: "Service and Maintaince",
      link: "Maintaince_Repair",
    },
  ];

  
  const useSharednavbar = () => useBetween(NavControl);
  
  
  const MobiNavhoveritem = (props) => {
    const { opennavfc, closenavfc, opennav } = useSharednavbar();
     const openclosenav=()=>{
      if(opennav.enable){
        closenavfc()
      }
      else{
        opennavfc()
      }
     }
    return (
      <div>
   
    

   
          <div className="navbar_top">
            <div className="menubar" onClick={openclosenav}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          
        <div className="navitemsholder">
        
        {servicelistnavbarmain.map((item2)=>(
          <div className="item">
           <div> <a onClick={closenavfc} href={item2.link}>{item2.name}</a></div>
          <div className="navitemsection">
          {
          item2.values.map((item) => (
          <div className="navitem_subsection">
              
              <a onClick={closenavfc} href={item2.link + "#" + item}>
                {item}
              </a>
         
          </div>
        )
        
        
        )}
         
        </div>
        </div>
        )
        )
        
        
        }
         <div className="item">
           <div> <a onClick={closenavfc} href="quoteform">Get Quote</a></div>
           </div>
      </div>

  </div>
  </div>
    );
  };

  
export default MobiNavhoveritem;