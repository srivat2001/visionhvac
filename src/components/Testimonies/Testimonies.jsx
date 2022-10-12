
import './Testimonies.css';

function Testimononies() {

  const testmonylist= 
  {
      testimony:[

   
        {
          Name:"Daniel Clifford",
          Designation:"Verified Graduate",
          Short_desc:<div>I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</div>,
          Light_desc:<div>“ I was an EMT for many years before I joined the bootcamp. 
            I’ve been looking to make a transition and have heard 
            some people who had an amazing experience here. 
            I signed up for the free intro course and found 
            it incredibly fun! I enrolled shortly thereafter. 
            The next 12 weeks was the best - and most grueling 
            - time of my life. Since completing the course, 
            I’ve successfully switched careers, working as a
             Software Engineer at a VR startup. ”</div>
        },     {
          Name:"Daniel Clifford",
          Designation:"Verified Graduate",
          Short_desc:<div>I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</div>,
          Light_desc:<div>“ I was an EMT for many years before I joined the bootcamp. 
            I’ve been looking to make a transition and have heard 
            some people who had an amazing experience here. 
            I signed up for the free intro course and found 
            it incredibly fun! I enrolled shortly thereafter. 
            The next 12 weeks was the best - and most grueling 
            - time of my life. Since completing the course, 
            I’ve successfully switched careers, working as a
             Software Engineer at a VR startup. ”</div>
        }
        
      ]

  };



const testimonylist=[];


testmonylist.testimony.map(testimonyobj =>testimonylist.push(      <div className='testimoniescon'>
      <div className='testimoney'> <div class="div1 eachdiv">
      <div className="userdetails">
        <div className="imgbox">
          <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg" alt=""/>
        </div>
        <div className="detbox">
          <p className="name">{testimonyobj.Name}</p>
          <p className="designation">{testimonyobj.Designation}</p>
        </div>
      </div>
      <div className="review">
         <h4>{testimonyobj.Short_desc}</h4>
         <p>{testimonyobj.Light_desc}</p>
       </div>
    </div></div></div>
      ) 

      )
  return (
   <div className='testimoniesmain'>  <center><h1>Testimonies</h1><div className='line'></div></center>
      <div id="testimonies" className='testimoniescontainer'>
      
        {testimonylist}
      </div>
      </div>
   )
  }
export default Testimononies;