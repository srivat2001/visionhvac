
import Rightside from '../Rightside/Topform';
import './Services.css';
import React, { useRef, useState , useEffect } from 'react';
import product from '../products/photo.png';
import SPAC from '../products/SplitAC.png';
import { Link, useLocation, Outlet, to, Navigate } from "react-router-dom";
import Footer from '../Footer/Footer';



function Ventilation() {
  const[thequery,changequrty1]=useState()
 function changequrerty(e){

 changequrty1(e.target["attributes"]["test"].value)
 window.scrollTo(0, 0)
 }


 const partylist= 
 {
     servicelist:[

  
       {
         service:"Hospitals",
         link:"https://www.sriramachandra.edu.in/medical/images/superdelux1.jpg",
         tags:[ " OT" , "Wards" , "Surgical Instrument Storage" , "X Ray Rooms" ,  "Restroom Exhausts"],
         desc:<div>Air Conditioning assures patient comfort and helps in
         the smooth functioning of medical procedure.
         In addition,Surgical Instrument storage and 
         Scanning rooms require Air conditioning for 
         safety purposes.</div>
         
         
       },
       {
         service:"Residence",
         link:"https://www.kentuckytourism.com/sites/default/files/styles/listing_slideshow/public/listing_images/profile/3903/1-img_3025.jpg?itok=oK0fFU2O",
         tags:[ "Master", "Bedrooms", "Home Theaters" , "Pooja Room" , "Living Room"],
         desc:<div>A Happy Home is incomplete without any Air Conditioning !
         Centralized, Split, or you name it,
         we are here to provide you a solution.</div>

       },
       {
         service:"Shopping Malls",
         link:"https://media.easemytrip.com/media/Blog/India/637062296404191408/637062296404191408gOTG8s.jpg",
         tags:[ "Theaters", "Shopping area", "Liftwell", "Entertainmentarea"],
         desc:<div>Air Conditioning Comforts the buyers and makes them stay
         longer !</div>


       },
       {
         service:"Server Area",
         link:"https://live.staticflickr.com/2461/3726757043_6cb518e5eb_b.jpg", 
          tags:[ "Server Room"],  desc:<div>Overheating of Equipments and Computer peripherals
          shortens its life time and affects the functioning.
          In some cases may cause a burn. Air Conditioning helps
          in controlling the heat desibation.</div>
       },
       {
         service:"Pharmacy",
         link:'https://media.istockphoto.com/photos/nothing-but-the-best-brands-for-their-customers-picture-id1248493102?k=20&m=1248493102&s=612x612&w=0&h=hW-_hepZ6GUsADOdhDJ6YIbMt3pIxxH-v8wk2PazyMo=', 
          tags:[ "Pharmacy Air Condtioning"],  desc:<div>Air Conditioning systems prevents cross-contamination.
          Ensures Segregation and Provides a Hygenic Environment.
          Tags: Pharmacy Air Condtioning</div>
       },,
       {
         service:"Cold Rooms",
         link:'https://5.imimg.com/data5/SELLER/Default/2022/3/VO/AK/CB/9490101/walk-in-cold-storage-room-500x500.jpg', 
          tags:[ "Cold Rooms"],  desc:<div>Maintains Artificial Temprature. Prevents Food items 
          from getting spoiled.</div>
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
        mainhead:"Cooling Services",
        subhead:"Chilling Page",
        product_list: [
     {  
            topic:"Split Units",
             details:[<a href='#'>Hi-Wall</a>,<a href='#'>Cassette Uni</a>],
              imglink:SPAC,main_topic_link:""
          },          {  
            topic:"VRF SYSTEM",
             details:["Vrf System",
             <ul>
              <div className='topic'>Cassette Unit 
              </div> 
              <li> 
                <a href='#'>One Way  Casstee</a>
              </li>  
              <li>
                 
                 <a href='#'>Two Way  Casstee</a>
              </li>
              <li> 
              <a href='#'>Four Way  Casstee</a>
              </li>
              </ul>,
             <ul>
              <div className='topic'> Fan Coil Unit</div> 
                  <li>     <a href='#'>Low Static</a></li> 
                  <li>     <a href='#'>Medium Static</a></li> 
                  <li>     <a href='#'>High  Static</a></li></ul>, 
              "Ahu","Treated Fresh Air Units"],
              imglink:product,main_topic_link:""
          },{  
            topic:"VRF SYSTEM",
             details:["Floor Mounted AHUs",
             <ul><div className='topic'>Vertical & Horizontal Floor Mounted Type</div>
<li> <a href='#'> Chilled Water Type</a></li>
<li><a href='#'> Vrf Gas Flow Type </a></li>
</ul>,
<ul>
<div className='topic'>Ceiling Suspended Ahu’s</div>
<li> <a href='#'>  Chilled Water Type</a></li>
<li><a href='#'>  Vrf Gas Flow Type </a></li>
 </ul>     
            ],
              imglink:product,main_topic_link:""
          }
        ]
      }
      const navpath = useLocation().pathname;
      const navhash = useLocation().hash;
      useEffect(() => {  
        
        navhash.replace("%20", " ");
        console.log(navhash.replace("%20", " "))
        if(document.getElementById(navhash.slice(1))){
          console.log("test")
          document.getElementById(navhash.slice(1)).scrollIntoView()
         
        }  
    
             },[]);
  return (
    <div><Rightside type="productdisplay" product_display_Banner={product_display_holder}/>

    <div className='collingsystem'>
    <div className='collingsystemholder'>
{slides}
</div></div>
<Footer/>

</div>);

}

export default Ventilation;