
import cooling from "../imgs/cooling.jpg";
import { useBetween } from "use-between";
import NavControl from "./NavControl";
import ventilation2 from "../imgs/ventilation2.jpeg";
import "./navbar.css";
import {  useEffect, useState} from "react";




  
  const useSharednavbar = () => useBetween(NavControl);
  
  
  const MobiNavhoveritem = (props) => {
    const { opennavfc, closenavfc, opennav } = useSharednavbar();
    const [weekdayquote, setWeekdayquote] = useState(null);

     const openclosenav=()=>{
      if(opennav.enable){
        closenavfc()
      }
      else{
        opennavfc()
      }
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

    useEffect(() => {
      const weekday = ["A Sunday Well Spent Brings a week of content",
      "Make each day a master place",
       "Work Hard in Silence, Let sucess make the noise",
       "Oppertunities dont happens, you create them",
       "Stay in your lane, comparison kills creativity & Jay",
       "Your Patience is your power",
       "Done is better than perfect"
      ];

const d = new Date();
setWeekdayquote(weekday[d.getDay()])

    
    
    }, [])
    
    return (
      <div>
   
    

   
          <div className="navbar_top">
            <div className="menubar" onClick={openclosenav}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          
            <blockquote className="blockquote">
  <svg viewBox="0 0 512 512" width="80" title="quote-left" className="quote-icon">
    <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
  </svg>
  <p className="quote">{weekdayquote}</p>

</blockquote>
  

  </div>
  </div>
    );
  };

  
export default MobiNavhoveritem;