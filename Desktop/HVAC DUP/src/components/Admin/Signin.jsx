
import { initializeApp } from 'firebase/app';
import { getDatabase} from "firebase/database";
import { getAuth } from "firebase/auth";
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
import './Admin.css';
const provider = new GoogleAuthProvider();

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
const auth = getAuth(app);

const signin=()=>{
    
    auth.languageCode = 'it';
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      alert("sorry VRO you are invalid ")
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });    
}

const Rightside =()=> {


return (

<GoogleButton onClick={signin}/>

)


}
export default Rightside;