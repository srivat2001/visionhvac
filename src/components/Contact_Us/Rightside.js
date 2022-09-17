import './maincontent.css';
import { initializeApp } from 'firebase/app';
import  logo2  from '../imgs/logo2.png';
import  logo3  from '../imgs/logo2-Inverted.png';
import {  useRef , useEffect } from "react";
import { getDatabase, ref, set ,get , onValue} from "firebase/database";
import { Link ,  useLocation } from "react-router-dom";
import { useMediaQuery } from 'usehooks-ts'

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

const Contactus =(props)=> {

  const matches = useMediaQuery('(max-width: 800px)')
  const email = useRef(null);
  const name = useRef(null);
  const phone = useRef(null);
  const message = useRef(null);
  function writeUserData(db,cusid,email,name,phone,message) {
  
    set(ref(db, '/ContactUs' + "/feedbackid"+cusid.toString()), {
      "name": name.current.value,
      "email": email.current.value,
      "phone" : phone.current.value,
      "feedbackid":cusid,
      "Message":message.current.value
    }).then(function(){
      alert("Thanks for the feedback")
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
    const starCountRef = ref(db, '/ContactUs');
    
    let cusid=0 ;
     onValue(starCountRef, (snapshot) => {
    snapshot.forEach(function(childSnapshot) {
      if( childSnapshot.val()["feedbackid"]>cusid){
        cusid=childSnapshot.val()["feedbackid"]
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
   writeUserData(db,cusid+1,email,name,phone,message)
  
   // console.log(emailRef.current.value) 
    
  }
 
return (
 
        <div className='feedform_container'>
           <div className='contact_us'>Contact us</div>
              <form className='feedform'>
                <input type="text" placeholder='Name' ref={name}></input>
                <input type="text" placeholder='Email' ref={email}></input>
                <input type="text" placeholder='Phone' ref={phone}></input>
                <textarea type="text" placeholder='Message' ref={message} >rf</textarea>
                <button onClick={add} >Submit</button>
              </form>
            
            </div>       )


}
export default Contactus;