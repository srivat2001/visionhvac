import './App.css';
import Rightside from './components/Rightside/Topform';
import AboutUS from './components/aboutus/AboutUS';
import Services from './components/Services/Services';
import Vendors from './components/Vendors/Vendors';
import Testimonies from './components/Testimonies/Testimonies';
import Contact_us from './components/Contact_Us/Rightside';

import Footer from './components/Footer/Footer';

import Whyus from './components/Whyus/Whyus'
function Main() {
  return (
    <div className='wholebodycontainer'>
    
     <Rightside/>
     <AboutUS/>
     <Services/>
     <Whyus/>
     <Vendors/>
     <Testimonies/>
     <Contact_us/>
     <Footer/>

         </div>
  );
}

export default Main;
