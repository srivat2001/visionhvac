
import './App.css';
import Cooling from './components/Serviceslist/Cooling';
import Ventilation from './components/Serviceslist/Ventilation';
import Admin from './components/Admin/Admin';
import Getquote from './components/Rightside/Getquote';
import Mainpage from './Main';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MaintainceRepair from './components/Serviceslist/MaintainceRepair';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Mainpage/>}/>
      

        <Route path="/" element={<Navigate replace to="home" />} />
        <Route path="Cooling" element={<Cooling />} />
        <Route path="Ventilation" element={<Ventilation />} />
        <Route path="Getquote" element={<Getquote />} />
        <Route path="Maintaince_Repair" element={<MaintainceRepair />} />
        <Route path="admin" element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
