
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set ,get , onValue} from "firebase/database";
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

const Rightside =()=> {
  function writeUserData(db,cusid,email,name,phone) {
    console.log(name);
    set(ref(db, '/Technical' + "/cusid"+cusid.toString()), {
      "name": name.current.value,
      "email": email.current.value,
      "phone" : phone.current.value,
      "status":"added",
      "cusid":cusid
    });
    
   
  }
    const arr=[]
  
    const starCountRef = ref(db, '/Technical');
    onValue(starCountRef, (snapshot) => {
      console.log(snapshot)
    snapshot.forEach(function(childSnapshot) {
        arr.push(
        
        
        <tr>
        <td data-label="Account">{childSnapshot.val()["cusid"]}</td>
        <td data-label="Due Date">{childSnapshot.val()["email"]}</td>
        <td data-label="Amount">{childSnapshot.val()["name"]}</td>
        <td data-label="Period">{childSnapshot.val()["phone"]}</td>
      </tr>) 
    });
  
  });
  

    

 

return (

<div className='admincontainer'>

<table>
  <caption>Admin Console</caption>
  <thead>
    <tr>
      <th scope="col">Customer ID</th>
      <th scope="col">Email</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
 {arr}
   
  </tbody>
</table>









</div>



)


}
export default Rightside;