import Ac from '../imgs/ventilation.jpg';
import cooling from '../imgs/cooling.jpg';
import { Link } from "react-router-dom";
import Rightside from '../Rightside/Topform';
import './Services.css';
import React, { useRef, useState , useEffect } from 'react';






function Ventilation() {
  useEffect(() => {  
    var url = window.location.toString();
    window.location = url.replace("", "");
         },[]);
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

      partylist.servicelist.map(serviceobj =>slides.push(<div id={serviceobj.service} className='collingservicecontainer'>
            <div className='collingservice'  imglink={serviceobj.link}   style={
              {background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0.1%, rgba(0, 0, 0, 0.7)), url('${serviceobj.link}')`,
              backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPositionX:'50%, 50% , 50%,50%',backgroundPositionY: '50%, 50%'
            }
          } >
            </div>
            <div data-content='service_Details_container'>
              <h1>{serviceobj.service}</h1>
           
              <div className='servicedetails'>{serviceobj.desc}</div>
              <div className='tagscontainer'> {serviceobj.tags.map(tag => (  
                   <div className='tagname'>  
                     {tag}  
                    </div>  
               ))}</div>
             
              <button test={serviceobj.service}  onClick={changequrerty} >Get quote</button>
              </div>
            </div>


      ) 

      )

  
  return (
    <div><Rightside name={thequery}/>


    <center><h1 className='topic'>Colling Services</h1></center>
    <div className='collingsystem'>
    <div className='collingsystemholder'>
{slides}
</div></div></div>);

}

export default Ventilation;