import './maincontent.css';
import { useMediaQuery } from 'usehooks-ts';
import { initializeApp } from 'firebase/app';
import  logo2  from '../imgs/logo2.png';
import  logo3  from '../imgs/logo2-Inverted.png';
import {  useRef , useEffect ,useState } from "react";
import { getDatabase, ref, set ,get , onValue,child,push} from "firebase/database";
import { Link ,  useLocation } from "react-router-dom";
import Promtscreen from '../Promtscreen/Promtscreen';

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
    )
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
  function writeUserData(db,email,name,phone,quote) {
    setcormationmsg({...cormationmsg,enable:1,type:"loading"})
     var today = new Date();
     var dd = String(today.getDate()).padStart(2, '0');
     var mm = String(today.getMonth() + 1).padStart(2, '0'); 
     var yyyy = today.getFullYear();
     today = mm + '-' + dd + '-' + yyyy + "|" +today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
     let key1 =  push(child(ref(db), 'Technical')).key;
    set(ref(db, '/Technical/' + key1), {
      "cusid": key1,
      "name": name.current.value,
      "email": email.current.value,
      "phone" : phone.current.value,
      "status":"added",
      "quote":quote.current.value,
      "date": today

    }).then(function(){
      setcormationmsg({...cormationmsg,enable:1,type:"confirmmsg"})
      
    });
 
   
  }
  const verify=(e)=>{
    if(!validateEmail(email.current.value)  ){
      setinvalidemail(1)
      return false
   }
   else{
    setinvalidemail(0)

   }
   if(!telephoneCheck(phone.current.value) ){
     setinvalidphone(1)
     return false
  }
  else{
    setinvalidphone(0)

  }
  return true
    
  }
  const add =(e)=> {
   
    e.preventDefault();
    if(verify(e)!=true){
      return false
    }
    
    if(!validateEmail(email.current.value)  ){
       setinvalidemail(1)
       return false
    }
    if(!telephoneCheck(phone.current.value) ){
      setinvalidphone(1)
      return false
   }
    const starCountRef = ref(db, '/Technical');

  
 
   writeUserData(db,email,name,phone,quote)
   
   // console.log(emailRef.current.value) 
    
  }

  const [message, setMessage] = useState(props.name);
  const [opennav, setopennav] = useState({use:"navbar",enable:0});
  const [invalidname, setinvalidname] = useState(0);
  const [invalidphone, setinvalidphone] = useState(0);
  const [invalidemail, setinvalidemail] = useState(0);
  const [cormationmsg, setcormationmsg] = useState({type:"loading",enable:0});
  const opennavfc = ()=>{
    setopennav({...opennav,use:"navbar show",enable:1})
  }
  const closeavfc = ()=>{
    setopennav({...opennav,use:"navbar hidden",enable:0})
  }
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

       {cormationmsg.enable?<Promtscreen type={cormationmsg.type}/>:null}
       <div className={opennav.use}><div className='navbarAlign'>
        <a href="#" class="close" onClick={closeavfc}></a>
             <div className='navitem' onClick={closeavfc}><a href="#servicelist">Service List</a></div>
             <div className='navitem' onClick={closeavfc}><a href="#servicelist">About US</a></div>
             <div className='navitem' onClick={closeavfc}><a href="#whyus">Why US</a></div>
             <div className='navitem' onClick={closeavfc}><a href="#vendors">Our Partners</a></div>
             <div className='navitem' onClick={closeavfc}><a href="#contactus">Contact US</a></div>
           </div>
        </div>
    <div className='poster'>

        <div className='left_side_after_poster'>

        <div className='logo_container2'><img src={matches ? logo3 : logo2} /></div>
        <i className="fa fa-bars" onClick={opennavfc}></i>






       { useLocation().pathname!="/"? <button className='backbtn'><Link to="/">Back</Link></button>:null}
           <div className='bestdeal'>Get <span className='Best_txt'>Best</span> <span className='Deal_txt'>Deal</span></div>
              <form className='getoffercontainer'>
                <input type="text"  placeholder='Name' ref={name}></input>
               { invalidname? <div className='error'> Invalid Name</div>:null}

                <input type="text" placeholder='Email'
                 onBlur={(e) => setinvalidemail(0)}   
                 onKeyUp ={(e) => validateEmail(e.target.value) && e.target.value.length?setinvalidemail(0):setinvalidemail(1)}
                 onFocus ={(e) => validateEmail(e.target.value) && e.target.value.length?setinvalidemail(0):setinvalidemail(1)}
                 ref={email}></input>

                { invalidemail ? <div className='error'> Invalid Email</div>:null}


                <input type="text" placeholder='Phone'
                 onBlur={(e) => telephoneCheck(0)} 
                 onKeyUp ={(e) => telephoneCheck(e.target.value) && e.target.value.length?setinvalidphone(0):setinvalidphone(1) } 
                 onFocus ={(e) => telephoneCheck(e.target.value) && e.target.value.length?setinvalidphone(0):setinvalidphone(1) } 
                 ref={phone}></input>
                { invalidphone? <div className='error'> Invalid Phone</div>:null}
                <textarea type="text" placeholder='query'  onChange={handleChange}  ref={quote} value={message}></textarea>
                <button onClick={add} >Submit</button>
           
              </form>
            
            </div>       <div className='logo_container'><img src={logo2} /></div>
      </div>
      
</div>

)


}
export default Rightside;