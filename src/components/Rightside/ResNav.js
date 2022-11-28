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
import { Link, useLocation, Outlet, to, Navigate } from "react-router-dom";
import Promtscreen from "../Promtscreen/Promtscreen";
import cooling from "../imgs/cooling.jpg";
import { useBetween } from "use-between";
import NavControl from "./NavControl";
import ventilation2 from "../imgs/ventilation2.jpeg";
import "./navbar.css";
import { Button } from "react-bootstrap";

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
      name:"Home",link:"Home"
   },
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
  const navpath = useLocation().pathname;
  const navhash = useLocation().hash;
  const useSharednavbar = () => useBetween(NavControl);
      const { opennavfc, closenavfc, opennav } = useSharednavbar();
      useEffect(() => {
     //   document.body.addEventListener('click', closenavbar );
        window.onclick = e => {
          if(document.getElementsByClassName("navbar")[0].classList.contains("show")){
            if(!document.getElementsByClassName("navbar")[0].contains(e.target)  && !document.getElementsByClassName("menubar")[0].contains(e.target)){
         
              closenavfc()
              
            
              }
            }
    
      } 
     

      if(document.getElementById(navhash.slice(1))){
        console.log("test")
        document.getElementById(navhash.slice(1)).scrollIntoView()
       
      }  
    },[]);
    const openlink =(e)=>{

      document.getElementById(e.target.getAttribute("item")).scrollIntoView();
      closenavfc()
    }
    const navtodiv = (e)=>{
       
      
      console.log(e.target.attributes.getNamedItem("value").value)
       if(e.target.tagName==="A"){

        if(document.getElementById(e.target.attributes.getNamedItem("value").value.replace(" ","_"))){
        
          document.getElementById(e.target.attributes.getNamedItem("value").value.replace(" ","_")).scrollIntoView();
          closenavfc()
          return 0;
         
        } 

       }
       if(document.getElementById(e.target.value)){
        
        document.getElementById(e.target.value).scrollIntoView();
        closenavfc()
        return 0;
       
      }  
      closenavfc()
    }
  
  return (

<div className={opennav.use}>
<div className="navbarAlign">
<i class="fa fa-close"onClick={closenavfc}  style={{fontSize:25,color:"#585858",float:"right",cursor:"pointer",position:"relative",zIndex:"1"}}></i>
  <a href="#" class="close" ></a>
  <div className="resnavitemholder">

{
   navitem.map((item)=>(
    <div><div className="hr"></div>
    <div className="navitem" >
      {navhash != "/home" ? (
        <a item={item.link} onClick={(e) => document.getElementById(e.target.getAttribute("item")).scrollIntoView() }  href={"#/home#"+item.link}>{item.name}</a>
      ) : (
        <a item={item.link} onClick={(e) => document.getElementById(e.target.getAttribute("item")).scrollIntoView() }  href={"#/home#"+item.link}>{item.name}</a>
      )}
    </div></div>

   ))
}
<div><div className="hr"></div>
    <div className="navitem" >
     <a href="#/quoteform">Get Your Quote</a>
    </div></div>

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
       {test.values.map((linktopage)=>(<div className="subitem">< a item={linktopage.replace(/ /g,"_")} onClick={(e) =>openlink(e) } href={"#/"+test.link+"#"+linktopage.replace(/ /g,"_")}>{linktopage}</a></div>))}
       </div>
      </div>
    </div>
  ))}
       </div>  
</div>
</div>)

}

export default ResNav;