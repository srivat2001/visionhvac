
import React, { useRef, useState , useEffect } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';
import './vendors.css';

SwiperCore.use([Virtual, Navigation, Pagination,Autoplay]);

function Vendors() {
  useEffect(() =>{

     
    if(getDirection()=='vertical'){
      setslideperview(1)
 
     }
     else{
      setslideperview(3)
 
     }
  }, []);
  /*
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 5 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };








*/


const [slideperview, setslideperview] = useState(3);

/*
const handleMediaQueryChange = (matches) => {
  if(matches) {

    setresvendors('vertical')

  } else {

    setresvendors('horizontal')

  }

};

*/
  const partylist= 
  {
      servicelist:[

        {
          service:"Daikin",link:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/DAIKIN_logo.svg/1280px-DAIKIN_logo.svg.png'
        },
        {
          service:"Drivis",link:require('../imgs/drivis.png')
        }
      ]

  };



const slides=[];




      partylist.servicelist.map(serviceobj =>slides.push(<SwiperSlide key={`slide-${serviceobj.service}`}><div 
        style={
         {background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0.1%, rgba(0, 0, 0, 0)), url('${serviceobj.link}')`,
         backgroundSize: '50%',backgroundRepeat: 'no-repeat',backgroundPositionY:'50%, 50%',backgroundPositionX:'50%, 50%'
       }
     }
        className='desc'><div className='Vendorname'></div></div></SwiperSlide>) 

      )

  
      function getDirection() {
        var windowWidth = window.innerWidth;
        if(window.innerWidth >= 1200){
          return 'horizontal'
        }
        else if(window.innerWidth < 1200 && window.innerWidth > 800){
          return 'middeverticalhor'
        }
        else{

          return 'vertical'
        }

       
      }
      window.addEventListener('resize', function(){
       let dir =getDirection(); 
       if(dir=='vertical'){

        setslideperview(1)
       }
       else if(dir=='middeverticalhor'){

        setslideperview(2)
       }
       else{

        setslideperview(4)

       }

      });
  return (
    <div id="vendors" className='Vendorscontainer'>
    <h1 className='sponcer_head'><div className="herearewe" >Here are our</div> <div className='venders_txt'>Partners</div></h1>
  
    <div className='Vendorsholder'>
<Swiper
    
        slidesPerView={slideperview}
        centeredSlides={false}
        spaceBetween={5}
        autoplay={{delay:500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true}}
        direction={'horizontal'}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation={true}
        virtual
      >{slides}</Swiper>

</div></div>

  );

}

export default Vendors;