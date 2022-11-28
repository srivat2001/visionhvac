import "./meeting_form.css";
import { initializeApp } from "firebase/app";
import { useRef, useEffect, useState } from "react";
import {
  getDatabase,
  ref,
  set,
  child,
  push,
} from "firebase/database";

import Promtscreen from "../Promtscreen/Promtscreen";
import ResNav from "./ResNav";
import Rightside from "./Topform";
import { useSearchParams } from "react-router-dom";
var test = true;
const firebaseConfig = {
  apiKey: "AIzaSyD8v-I8yNPBHIfU9lEY6xfLm1GeJT5QXP0",

  authDomain: "pinnacle-54760.firebaseapp.com",

  databaseURL: "https://pinnacle-54760-default-rtdb.firebaseio.com",

  projectId: "pinnacle-54760",

  storageBucket: "pinnacle-54760.appspot.com",

  messagingSenderId: "482491046116",

  appId: "1:482491046116:web:37a939d6269879d269b4f1",

  measurementId: "G-LWTCM6703F",
};
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
function telephoneCheck(str) {
  var a = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(
    str
  );
  return a;
}
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const Quoteform=(props)=>{

  const email = useRef(null);
  const name = useRef(null);
  const phone = useRef(null);
  const quote = useRef(null);
  const Timedateofbooking = useRef(null);
  function writeUserData(db, email, name, phone, quote,Timedateofbooking) {
    setcormationmsg({ ...cormationmsg, enable: 1, type: "loading" });
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    today =mm +"-" +dd +"-" +yyyy +"|" +today.getHours() +":" +today.getMinutes() +":" +today.getSeconds();
    let key1 = push(child(ref(db), "Meeting")).key;
    set(ref(db, "/Meeting/" + key1), {
      cusid: key1,
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
      status: "added",
      quote: quote.current.value,
      meeting_datetime: Timedateofbooking.current.value,
      date: today,
    }).then(function () {
      setcormationmsg({ ...cormationmsg, enable: 1, type: "confirmmsg" });
    });
  }
  const verify = (e) => {
    if (!validateEmail(email.current.value)) {
      setinvalidemail(1);
      return false;
    } else {
      setinvalidemail(0);
    }
    if (!telephoneCheck(phone.current.value)) {
      setinvalidphone(1);
      return false;
    } else {
      setinvalidphone(0);
    }
    return true;
  };
  const add = (e) => {
    e.preventDefault();
    if (verify(e) != true) {
      return false;
    }

    if (!validateEmail(email.current.value)) {
      setinvalidemail(1);
      return false;
    }
    if (!telephoneCheck(phone.current.value)) {
      setinvalidphone(1);
      return false;
    }
    const starCountRef = ref(db, "/Technical");

    writeUserData(db, email, name, phone, quote,Timedateofbooking);

    // console.log(emailRef.current.value)
  };

  const [message, setMessage] = useState(props.name);

  const [invalidname, setinvalidname] = useState(0);
  const [invalidphone, setinvalidphone] = useState(0);
  const [invalidemail, setinvalidemail] = useState(0);
  const [cormationmsg, setcormationmsg] = useState({
    type: "loading",
    enable: 0,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const querystring = searchParams.get("_q")

  useEffect(() => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    
    if (dd < 10) {
       dd = '0' + dd;
    }
    
    if (mm < 10) {
       mm = '0' + mm;
    } 
        
    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("birthdaytime").setAttribute("min", today);
    if (test) {
      setMessage(querystring);
    }
    test = true;
  },[]);
  const handleChange = (event) => {
    setMessage(event.target.value);
    test = false;
  };
  const product_display_holder = 
  {
    mainhead:"Get Your Quote Now",
    subhead:"just Fill the form below",
    product_list: [
 
    ]
  }

  return( <div>
        {cormationmsg.enable ? <Promtscreen type={cormationmsg.type} /> : null}
        <ResNav />
        <Rightside  />
<h1 className="book_a_meeting">Book A Meeting!</h1>
<h1 className="fill_the_form_below">Fill the form Below</h1>

<form className="getoffercontainer">

<input type="text" id="meeting_form_name"placeholder="" ref={name}></input>
<div for="label" className="label" >Full Name</div>

{invalidname ? <div className="error"> Invalid Name</div> : null}



<input
  type="text"
  placeholder=""
  onBlur={(e) => setinvalidemail(0)}
  onKeyUp={(e) =>
    validateEmail(e.target.value) && e.target.value.length
      ? setinvalidemail(0)
      : setinvalidemail(1)
  }
  onFocus={(e) =>
    validateEmail(e.target.value) && e.target.value.length
      ? setinvalidemail(0)
      : setinvalidemail(1)
  }
  ref={email}
></input>
<div className="label"  >Email</div>
{invalidemail ? <div className="error"> Invalid Email</div> : null}


<input
  type="text"
  placeholder=""
  onBlur={(e) => telephoneCheck(0)}
  onKeyUp={(e) =>
    telephoneCheck(e.target.value) && e.target.value.length
      ? setinvalidphone(0)
      : setinvalidphone(1)
  }
  onFocus={(e) =>
    telephoneCheck(e.target.value) && e.target.value.length
      ? setinvalidphone(0)
      : setinvalidphone(1)
  }
  ref={phone}
></input>
<div className="label"  >Phone</div>
{invalidphone ? <div className="error"> Invalid Phone</div> : null}


<textarea
  type="text"
  placeholder=""
  onChange={handleChange}
  ref={quote}
  value={message}
></textarea>
 <div className="ph-for-ta" >Description</div>

<select ref={Timedateofbooking}>
<option>Industry</option>
<option>commercial</option>
<option>Education Institutes</option>
<option>Residensial</option>
<option>Others</option>
</select>
<input type="date" id="birthdaytime" name="birthdaytime"/>
<button onClick={add}>Submit</button>
</form>

<footer></footer>
</div>
)




}
export default Quoteform;