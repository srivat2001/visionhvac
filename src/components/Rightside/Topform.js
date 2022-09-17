import './maincontent.css';
import { initializeApp } from 'firebase/app';
import  logo2  from '../imgs/logo2.png';
import  logo3  from '../imgs/logo2-Inverted.png';
import {  useRef , useEffect ,useState } from "react";
import { getDatabase, ref, set ,get , onValue} from "firebase/database";
import { Link ,  useLocation } from "react-router-dom";
import { useMediaQuery } from 'usehooks-ts'
var test = true;
const firebaseConfig = {

  apiKey: "AIzaSyD8v-I8yNPBHIfU9lEY6xfLm1GeJT5QXP0",

  authDomain: "pinnacle-54760.firebaseapp.com",

  databaseURL: "https://pinnacle-54760-default-rtdb.firebaseio.com",

  projectId: "pinnacle-54760",

  storageBucket: "pinnacle-54760.appspot.com",

  messagingSenderId: "482491046116",

  appId: "1:482491046116:web:37a939d6269879d269b4f1",

  measurementId: "G-LWTCM6703F"

};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
function telephoneCheck(str) {
  var a = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(str);
  return a;
}

const Rightside =(props)=> {

  const matches = useMediaQuery('(max-width: 800px)')
  const email = useRef(null);
  const name = useRef(null);
  const phone = useRef(null);
  const quote = useRef(null);
  function writeUserData(db,cusid,email,name,phone) {
  
    set(ref(db, '/Technical' + "/cusid"+cusid.toString()), {
      "name": name.current.value,
      "email": email.current.value,
      "phone" : phone.current.value,
      "status":"added",
      "cusid":cusid,
      "quote":quote
    }).then(function(){
      alert("Thanks for choosing Hvac")
    });
 
   
  }
  
  const add =(e)=> {
    e.preventDefault();
    if(!validateEmail(email.current.value)  ){
       alert("Inccorect email");
       return false
    }
    if(!telephoneCheck(phone.current.value) ){
      alert("Inccorect phone");
      return false
   }
    const starCountRef = ref(db, '/Technical');
    
    let cusid=0 ;
     onValue(starCountRef, (snapshot) => {
    snapshot.forEach(function(childSnapshot) {
      if( childSnapshot.val()["cusid"]>cusid){
        cusid=childSnapshot.val()["cusid"]
      }
  
  
    });
  
  })
  function getDirection() {
    var windowWidth = window.innerWidth;
    if(window.innerWidth >= 800){
      return 'horizontal'
    }
    else{

      return 'vertical'
    }
  }
  window.addEventListener('resize', function(){
    let dir =getDirection(); 
    if(dir=='horizontal'){

     //setslideperview(1)
    }
    else{

   //  setslideperview(2)
    }
   }
  )
   writeUserData(db,cusid+1,email,name,phone)
  
   // console.log(emailRef.current.value) 
    
  }

  const [message, setMessage] = useState(props.name);
  useEffect(() => {

   if(test){
    setMessage(props.name);
    
   }
   test=true;
     

   
   });
  const handleChange = event => {
 
   setMessage(event.target.value);
   test=false;
  };

return (<div className="rightside">
    <div className='poster'>
        <div className='left_side_after_poster'>
        <div className='logo_container2'><img src={matches ? logo3 : logo2} /></div>
       { useLocation().pathname!="/"? <button className='backbtn'><Link to="/">Back</Link></button>:null}
           <div className='bestdeal'>Get <span className='Best_txt'>Best</span> <span className='Deal_txt'>Deal</span></div>
              <form className='getoffercontainer'>
                <input type="text" placeholder='Name' ref={name}></input>
                <input type="text" placeholder='Email' ref={email}></input>
                <input type="text" placeholder='Phone' ref={phone}></input>
                <textarea type="text" placeholder='query'  onChange={handleChange}  ref={quote} value={message}></textarea>
                <button onClick={add} >Submit</button>
              </form>
            
            </div>       <div className='logo_container'><img src={logo2} /></div>
      </div>
      
</div>)


}
export default Rightside;