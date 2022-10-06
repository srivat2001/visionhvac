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

  const navitem = [
   {
      name:"Service List",link:"servicelist"
   },
   {
    name:"About US",link:"aboutus"
 },
 {
  name:"whyus",link:"whyus"
},
{
  name:"Our Partners",link:"vendors"
},
{
  name:"Contact US",link:"contactus"
}
  ]






const ResNav = () => {
  const useSharednavbar = () => useBetween(NavControl);
      const { opennavfc, closenavfc, opennav } = useSharednavbar();
      navitem.map((item)=>(console.log(item.name)))
      const navloc = useLocation().pathname;
  return (

<div className={opennav.use}>
<div className="navbarAlign">
<i class="fa fa-close" style={{fontSize:30,color:"white",float:"right"}}></i>
  <a href="#" class="close" onClick={closenavfc}></a>

{
   navitem.map((item)=>(
    <div><div className="hr"></div>
    <div className="navitem" onClick={closenavfc}>
      {navloc != "/home" ? (
        <a href={"/#"+item.link}>{item.name}</a>
      ) : (
        <a href={"#"+item.link}>{item.name}</a>
      )}
    </div></div>

   ))
}



  {servicelistnavbarmain.map((test) => (
    <div>
      <div className="hr"></div>
      <div className="navitem">
        <input type="checkbox" id={test.name}></input>
        <div className="mobile_navitem_flexbox">
          <label for={test.name}>{test.name}</label>
          <div className="arrow"></div>
        </div>
        <div className="nav_mobile_subsection">
       {test.values.map((linktopage)=>(<div>< a href={test.link+"#"+linktopage}>{linktopage}</a></div>))}
       </div>
      </div>
    </div>
  ))}
         
</div>
</div>)

}

export default ResNav;