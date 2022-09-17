
import './App.css';
import Colling from './components/Serviceslist/Colling';
import Ventilation from './components/Serviceslist/Ventilation';
import Admin from './components/Admin/Admin';
import Mainpage from './Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaintainceRepair from './components/Serviceslist/MaintainceRepair';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route index element={<Mainpage />} />
        <Route path="Colling" element={<Colling />} />
        <Route path="Ventilation" element={<Ventilation />} />
        <Route path="Maintaince_Repair" element={<MaintainceRepair />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
