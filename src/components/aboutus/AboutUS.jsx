
import './Aboutus.css';
import calender from "../imgs/calender.png"
function Aboutus() {
  return (
    <div  id="aboutus"className='aboutuscontainer'>
      <div className='aboutus_left'>
         <h1 className='aboutustxt'>Who are We?</h1>
         <div className='desc'>Treatedaer is an Independent company
specialized on mechanical consulting. We are dedicated in
providing an exceptional level of service to each and
every one of our clients

We gather requirements & evaluate based upon the options 
available. We adopt state-of-the-art technologies for
both cooling and ventilation systems. We design our
systems in such a way that it suits your space and matches
your expectation.</div>
</div>

<div className='rightaboutus'><img src={calender}></img><a href="#/Book_a_meeting"><button >Schedule a meeting</button></a></div>
         </div>
  );
}

export default Aboutus;