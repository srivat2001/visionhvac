
import './footer.css';
const footer =()=> {
    return(

        <footer>
<div className="row primary">
  <div className="column about">

  <h3>Vision Havac Solutions</h3>

   <p>
   Vision HVAC Solutions is an Independent company specialized on 
   mechanical consulting.
  </p>


</div>

<div className="column links">
<h3>Some Links</h3>

 <ul>

  <li>
   <a href="#testimonies">Testimonies</a>
  </li>
  <li>
   <a href="#cookies-policy">Cookies Policy</a>
  </li>
  <li>
   <a href="#terms-of-services">Terms Of Service</a>
  </li>
  <li>
   <a href="#support">Support</a>
  </li>
 </ul>

</div>


<div class="column links">
  <h3>Social Media</h3>
   <ul>
    <li>
     <a href="#faq">Instagram</a>
    </li>
    <li>
     <a href="#cookies-policy">Linkdin</a>
    </li>
   
  </ul>
</div>

<div className="column subscribe">
 <h3>Newsletter</h3>
  <div>
   <input type="email" placeholder="Your email id here" />
   <button>Subscribe</button>
  </div>

</div>

</div>


</footer>

    )
}

export default footer;