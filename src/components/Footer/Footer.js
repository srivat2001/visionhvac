
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

  <div className="social">
    <i className="fa-brands fa-facebook-square"></i>
    <i className="fa-brands fa-instagram-square"></i>
    <i className="fa-brands fa-twitter-square"></i>
    <i className="fa-brands fa-youtube-square"></i>
    <i className="fa-brands fa-whatsapp-square"></i>
  </div>
</div>

<div className="column links">
<h3>Some Links</h3>

 <ul>

  <li>
   <a href="#faq">F.A.Q</a>
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
  <h3>Some Links</h3>
   <ul>
    <li>
     <a href="#faq">F.A.Q</a>
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