
import product from '../products/photo.png';
import SPAC from '../products/SplitAC.png';
import Rightside from '../Rightside/Topform';
import './Services.css';
import React, { useState , useEffect } from 'react';
import { Link, useLocation, Outlet, to, Navigate } from "react-router-dom";
import Footer from '../Footer/Footer';





function Ventilation() {
 


  const partylist= 
  {
      servicelist:[

   
        {
          
          service:"Car parking Area",
          link:"https://media.istockphoto.com/photos/dealer-new-cars-stock-picture-id480652712?k=20&m=480652712&s=612x612&w=0&h=dbyTkQ3-PJJMAlNAR2hGxPWX1ODvSJspuDsdvQmOKlI=",
          tags:[ "Parking", "Car Parking","Parking Complex"],
          desc:"With the help of a exahaust Keep your parking area  pollutant free"
          
          
        },
        {
          service:"Basement",
          link:"https://thumbs.dreamstime.com/b/basement-pipes-modern-plumbing-old-building-62728891.jpg",
          tags:[ "Basement Ventilation"],
          desc:"Have a healthy environment by removing moisture and Contamiinated air"

        },
        {
          service:"Electrical Panel Room",
          link:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Electrical_switchgear.JPG/1200px-Electrical_switchgear.JPG",
          tags:[ "Electrical panel room"],desc:"Dispose the heat in electrical rooms by having a proper ventilation"
        },
        {
          service:"Restroom",
          link:require('../imgs/handShake.jpg'), 
           tags:[ "Restroom Ventilation"],desc:"Improve your restroom hygiene by removing the smelly odours !"
        }
      ]

  };






const slides=[];
console.log(partylist.servicelist[0].tags)

      partylist.servicelist.map(serviceobj =>slides.push(<div id={serviceobj.service.replace(" ","_")} className='collingservicecontainer'>
            <div className='collingservice'     style={
              {background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0.1%, rgba(0, 0, 0, 0.7)), url('${serviceobj.link}')`,
              backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPositionX:'50%, 50% , 50%,50%',backgroundPositionY: '50%, 50%'
            }
          } >
            </div>
            <div className='service_Details_container'>
              <h1>{serviceobj.service}</h1>
           
              <div className='servicedetails'>{serviceobj.desc}</div>
              <div className='tagscontainer'> {serviceobj.tags.map(tag => (  
                   <div className='tagname'>  
                     {tag}  
                    </div>  
               ))}</div>
             
              <button value={serviceobj.service}  onClick={(e) => window.location.href='#/quoteform?_q='+e.target.value} >Get quote</button>
              </div>
            </div>


      ) 

      )
    
   const product_display_holder = 
   {
     mainhead:"Ventilation",
     subhead:"Chilling Page",
     product_list: [
       {  
         topic:"VRF SYSTEM",
          details:["Vrf System",
          <ul><div className='topic'>Cassette Unit </div> <li> One Way  Casstee</li>  <li> Two Way  Casstee</li> <li> Four Way  Casstee</li></ul>,
          <ul><div className='topic'> Fan Coil Unit</div>  <li> Low Static</li>  <li> Medium Static</li> <li> High  Static</li></ul>, 
           "Ahu","Treated Fresh Air Units"],
           imglink:product,main_topic_link:""
       }
     ]
   }
      const navpath = useLocation().pathname;
       const navhash = useLocation().hash;
      useEffect(() => {  

        
   
          
  
          if(document.getElementById(navhash.slice(1).replace(/_/g," "))){
            
            document.getElementById(navhash.slice(1).replace(/_/g," ")).scrollIntoView()
           
          }  
      
              

    
    
             },[]);
  return (
    <div><Rightside type="productdisplay" product_display_Banner={product_display_holder}/>


    <center><h2 className='topic'>Where?</h2></center>
    <div className='collingsystem'>
    <div className='collingsystemholder'>
{slides}
</div></div>
<Footer/>
</div>);

}

export default Ventilation;