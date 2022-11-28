
import './App.css';
import Cooling from './components/Serviceslist/Cooling';
import Ventilation from './components/Serviceslist/Ventilation';

import Getquote from './components/Rightside/Getquote';
import Meeting_Form from './components/Rightside/Meeting_Form';
import Notfound from './components/404notfound/Page404';
import Mainpage from './Main';
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from "react-router-dom";
import MaintainceRepair from './components/Serviceslist/MaintainceRepair';
import Quoteform from './components/Rightside/Quoteform';
/*  <Route path="/" element={<Navigate replace to="home" />} />*/
function App() {
  return (
    <HashRouter >
      <Routes>
        <Route path="Home" element={<Mainpage/>}/>
      
        <Route path="/" element={<Navigate replace to="Home" />} />
       
     
        <Route path="Cooling" element={<Cooling />} />
        <Route path="Ventilation" element={<Ventilation />} />
        <Route path="Getquote" element={<Getquote />} />
        <Route path="Book_a_meeting" element={<Meeting_Form />} />
        <Route path="Maintaince_Repair" element={<MaintainceRepair />} />
     
        <Route path="quoteform" element={<Quoteform/>} />
        <Route path="/*" element={<Notfound/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
