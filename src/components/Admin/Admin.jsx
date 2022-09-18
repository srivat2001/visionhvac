
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set ,get , onValue} from "firebase/database";
import {useState,useEffect} from "react";
import './Admin.css';
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

var ddatabase_table = [];
var feedbacktable_table = [];
const Rightside =()=> {
  const [update, refresh] = useState(0);
  function writeUserData(db,cusid,email,name,phone) {
    set(ref(db, '/Technical' + "/cusid"+cusid.toString()), {
      "name": name.current.value,
      "email": email.current.value,
      "phone" : phone.current.value,
      "status":"added",
      "cusid":cusid
    });
    
   
  }
    
    const starCountRef = ref(db, '/Technical');
    const feedbackRef = ref(db, '/ContactUs');
/* ddatabase_table.map(data =>  <tr>
        <td data-label="Account">{data.cusid}</td>
        <td data-label="Due Date">{data.email}</td>
        <td data-label="Amount">{data.name}</td>
        <td data-label="Period">{data.phonenumber}</td>
      </tr>):null */

  

  useEffect(() => {
   
    if(ddatabase_table.length==0){    onValue(starCountRef, (snapshot) => {
      ddatabase_table=[]
      snapshot.forEach(function(childSnapshot) {
       ddatabase_table.push( {
            cusid: childSnapshot.val()["cusid"],
            email : childSnapshot.val()["email"],
            name: childSnapshot.val()["name"],
            phonenumber : childSnapshot.val()["phone"]
          }) 
      })
      console.log(ddatabase_table)
      refresh(1)
    });
    }
    if(feedbacktable_table.length==0){    onValue(feedbackRef, (snapshot) => {
      feedbacktable_table=[]
      snapshot.forEach(function(childSnapshot) {
        feedbacktable_table.push( {
          feedbackid: childSnapshot.val()["feedbackid"],
            email : childSnapshot.val()["email"],
            name: childSnapshot.val()["name"],
            phonenumber : childSnapshot.val()["phone"],
            message : childSnapshot.val()["Message"]
          }) 
      })
      console.log(feedbacktable_table)
      refresh(1)
    });
    }








   
    },[]);
 

return (

<div className='admincontainer'>

<table>
  <caption>Quote Database</caption>
  <thead>
    <tr>
      <th scope="col">Customer ID</th>
      <th scope="col">Email</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
  {update?    ddatabase_table.map(data =>  <tr>
        <td data-label="Customer ID">{data.cusid}</td>
        <td data-label="Email ID">{data.email}</td>
        <td data-label="Name">{data.name}</td>
        <td data-label="Phone">{data.phonenumber}</td>
      </tr>):null}

   
  </tbody>
  </table>
<table>
  <caption>Feedback Database</caption>
  <thead>
    <tr>
      <th scope="col">Feedback id</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Nunber</th>
      <th scope="col">Name</th>
      <th scope="col">Message</th>
    </tr>
  </thead>
  <tbody>
  {update?    feedbacktable_table.map(data =>  <tr>
        <td data-label="Feedback id">{data.feedbackid}</td>
        <td data-label="Name">{data.email}</td>
        <td data-label="Phone Nunber">{data.phonenumber}</td>
        <td data-label="Name">{data.name}</td>
        <td data-label="Message">{data.message}</td>
      </tr>):null}

   
  </tbody>
</table>









</div>



)


}
export default Rightside;