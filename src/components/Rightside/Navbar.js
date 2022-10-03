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
  const Navhoveritem = (props) => {
    const { opennavfc, closenavfc, opennav } = useSharednavbar();

    const mainurl = useLocation().pathname == "/";
    return (
      <div className="topcnachoverdesc">
        <div
          className="pic"
          style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0.1%, rgba(0, 0, 0, 0)), url('${props.naviteminfo.imglink}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "50%, 50%",
            backgroundPositionX: "50%, 50%",
          }}
        ></div>
        <div className="itemsholder">
          {props.naviteminfo.values.map((item) => (
            <div className="items">
              <a href={props.naviteminfo.link + "#" + item}>{item}</a>
              <div className="hrline"></div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const MobiNavhoveritem = (props) => {
    const { opennavfc, closenavfc, opennav } = useSharednavbar();

    const mainurl = useLocation().pathname == "/";
    return (
      <div>
   
    

   
          <div className="navbar_top">
            <div className="menubar" onClick={opennavfc}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          
        <div className="navitemsholder">
        
        {servicelistnavbarmain.map((item2)=>(
          <div className="item">
           <div>{item2.name}</div>
          <div className="navitemsection">
          {
          item2.values.map((item) => (
          <div className="navitem_subsection">
            {mainurl ? (
              <Link
                onClick={closenavfc}
                to={{
                  pathname: servicelistnavbarmain[0].link,
                  hash: item,
                }}
              >
                {item}
              </Link>
            ) : (
              <a onClick={closenavfc} href={servicelistnavbarmain[0].link + "#" + item}>
                {item}
              </a>
            )}
          </div>
        )
        
        
        )}
        </div>
        </div>
        )
        )
        
        
        }
      </div>
  </div>
  </div>
    );
  };

  
export default MobiNavhoveritem;