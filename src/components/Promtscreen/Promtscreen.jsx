
import Modal from "react-modal";
import "./Promtscreen.css"
import {  useRef , useEffect ,useState } from "react";
Modal.setAppElement("#root");

function Promtscreen(props) {
  const [isOpen, setIsOpen] = useState(true);

  function toggleModal(props) {
    setIsOpen(!isOpen);
    window.location.reload(false);
  }
  /*     <div>Thanks For Choosing Hvac</div>
        <button onClick={toggleModal}>Ok</button> */
  return (



      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Thanks For Choosing Hvac"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        {props.type=="loading"&&<div class="loader"></div>}
        {props.type=="confirmmsg"&&<span><div>Thanks For Choosing Hvac</div>
        <button onClick={toggleModal}>Ok</button></span>} 
      </Modal>
      
  
  );
}
export default Promtscreen;