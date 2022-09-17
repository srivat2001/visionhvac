import Ac from '../imgs/ventilation.jpg';
import cooling from '../imgs/colling.jpg';
import { Link } from "react-router-dom";
import Rightside from '../Rightside/Topform';
import './Services.css';
import React, { useRef, useState , useEffect } from 'react';






function Ventilation() {

  return (

    <div className='maintaince_container'><Rightside/>
  
  
      <center><h1 className='topic'>Testing & Commisoning</h1></center>
      <div className='collingsystem'>
      <div className='collingsystemholder'>
       <center> <ul>
          <li>Adversable setting for units-</li>
          <li>-100% Commisioning works to be completed</li>
          
<li>Annual Maintanance Service-</li>
<li>- Labour maintanance service </li>
          
          </ul></center>

  </div></div></div>

  );

}

export default Ventilation;