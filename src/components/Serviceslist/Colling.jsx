import Ac from '../imgs/ventilation.jpg';
import cooling from '../imgs/colling.jpg';
import { Link } from "react-router-dom";
import Rightside from '../Rightside/Topform';
import './Services.css';
import React, { useRef, useState , useEffect } from 'react';






function Colling() {
  const[thequery,changequrty1]=useState(1)
 function changequrerty(e){

 changequrty1(e.target["attributes"]["test"].value)
 window.scrollTo(0, 0)
 }

  const partylist= 
  {
      servicelist:[

   
        {
          service:"Hospitals",link:Ac
        },
        {
          service:"Residence",link:cooling
        },
        {
          service:"Cold Rooms",link:require('../imgs/handShake.jpg')
        }
      ]

  };




  const slides=[];
  console.log(partylist.servicelist[0].tags)
  
        partylist.servicelist.map(serviceobj =>slides.push(<div className='collingservicecontainer'>
              <div className='collingservice'     style={
                {background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0.1%, rgba(0, 0, 0, 0.7)), url('${serviceobj.link}')`,
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPositionX:'50%, 50% , 50%,50%',backgroundPositionY: '50%, 50%'
              }
            } >
              </div>
              <div className='service_Details_container'>
                <h1>{serviceobj.service}</h1>
             
          
              
                <button test={serviceobj.service}  onClick={changequrerty} >Get quote</button>
                </div>
              </div>
  
  
        ) 
  
        )
  
    
    return (
      <div><Rightside name={thequery}/>
  
  
      <center><h1 className='topic'>Ventilation</h1></center>
      <div className='collingsystem'>
      <div className='collingsystemholder'>
  {slides}
  </div></div></div>);

}

export default Colling;