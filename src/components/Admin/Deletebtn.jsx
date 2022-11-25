
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set} from "firebase/database";
import {useState} from "react";
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
const updatestatus =(props)=> {
    function writeUserData(db) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '-' + dd + '-' + yyyy;
       set(ref(db, '/Technical' + "/"+today+"-"+phone.current.value), {
         "status":"Done",
       }).then(function(){
         alert("Updated")
       });
     }
     writeUserData(db)
     const starCountRef = ref(db, '/');



  


return (
<button></button>
)


}
export default deletebtn;