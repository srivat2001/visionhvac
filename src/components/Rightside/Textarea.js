import {  useRef , useEffect ,useState } from "react";


const txtarea=()=>{
return(<textarea type="text" placeholder='query'  onChange={handleChange}  ref={quote} value={message}></textarea>)
}

export default txtarea;