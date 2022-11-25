import {useState, useCallback } from "react";
const NavControl = () => {
    const [opennav, setopennav] = useState({ use: "navbar", enable: 0 });
    const opennavfc = useCallback(
      () => setopennav({ ...opennav, use: "navbar show", enable: 1 }),
      []
    );
    const closenavfc = useCallback(
      () =>{


       
        setopennav({ ...opennav, use: "navbar", enable: 0 })
      } ,
      []
    );
    return {
      opennav,
      opennavfc,
      closenavfc,
    };
  };

export default NavControl;