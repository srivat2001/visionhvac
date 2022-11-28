import Ac from '../imgs/ventilation.jpg';
import cooling from '../imgs/cooling.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Services.css';



function Services() {

 
  const partylist= 
  {
      servicelist:[

   
        {
          service:"Ventilation",link:Ac,page:"Ventilation"
        },
        {
          service:"Cooling",link:cooling,page:"Cooling"
        },
        {
          service:"Services and maintenance",link:require('../imgs/handShake.jpg'),page:"Maintaince_Repair"
        }
      ]

  };

/*style={
              {background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.94) 0.1%, rgba(0, 0, 0, 0.7)), url('${serviceobj.link}')`,
              backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPositionX:'50%, 50% , 50%,50%',backgroundPositionY: '50%, 50%'
            }
          }*/

const slides=[];


      partylist.servicelist.map(serviceobj =>slides.push(
        <a href={"#/"+serviceobj.page}>   <div data-attribute={serviceobj.link} className='theservice'    style={
          {background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.94) 0.1%, rgba(0, 0, 0, 0.3)), url('${serviceobj.link}')`,
          backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPositionX:'50%, 50% , 50%,50%',backgroundPositionY: '50%, 50%'
        }
      } ><div className='service_Name'><h1>{serviceobj.service}</h1></div></div></a>


      ) 

      )

  
  return (
    <div id="servicelist" className='servicecontainer'>
    <div className='serviceholder'>
{slides}

</div> </div>

  );

}

export default Services;