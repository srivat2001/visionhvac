
import ResNav from "./ResNav";
import React,{  useEffect } from "react";
import candid from "../imgs/candid.png"
import { useHistory ,useLocation } from 'react-router-dom';
const Product_display = (props) => {
  const productdetail = props.product_details;
  const location = useLocation()

 /*position: absolute;
top: 10px;
right: 15px;
margin-top: 4px;
z-index: 5;
width: 90px;

margin-top: 160px;
 */
  useEffect(() => {
      
      document.getElementsByClassName("What we offer?").length>0 &&
      document.getElementsByClassName("What we offer?")[0].addEventListener("click",()=>{
      document.getElementById("servicelist").scrollIntoView();
      const element = document.createElement("div");
      element.className = "highlight_background";

      document.getElementsByClassName("serviceholder")[0].parentElement.appendChild(element)
      setTimeout(()=>{document.getElementsByClassName("serviceholder")[0].classList.add("highlight");}, 500);
      
      setTimeout(()=>{
          document.getElementsByClassName("highlight_background")[0].style.opacity=0;
          document.getElementsByClassName("highlight_background")[0].style.opacity=0;
          setTimeout(()=>{

            document.getElementsByClassName("highlight_background")[0].remove()

            document.getElementsByClassName("serviceholder")[0].classList.remove("highlight")
            document.getElementsByClassName("serviceholder")[0].classList.remove("highlight")
            document.getElementsByClassName("highlight_background")[0].remove()


          },500);
      
      
      }, 2000);  

         
       })
 


       

     
   
      
   },[]);

  return (
     
    <div>
     
      <center>
        {location.pathname=="/home"?<img src={candid} width={200} ></img>:<img className="img_otherthanhome" src={candid} width={200} ></img>}
        {location.pathname=="/home"?<h1>{productdetail.mainhead}</h1>:<h1 className="h1_otherthanhome" >{productdetail.mainhead}</h1>}
        
      </center>
      <center>
        <h2 className={productdetail.subhead}>{productdetail.subhead}</h2>
      </center>
      <div className="imgbanner">
      <ResNav />
        {productdetail.product_list.map((products,i) => (
          <div className="product_display_holder">
            {products.imglink.length==0?null:<img width={250} src={products.imglink}></img>}
            <div  className={products.imglink.length==0?"products_holder noimgstyle":"products_holder"}>
            <h2>   {products.main_topic_link==0?products.topic:<a href={"/"+products.main_topic_link}>{products.topic}</a>}</h2>
              {products.details.map((details_point) => (
               
                <div  className="product_name">{details_point}</div>
              ))}
              <button value={products.topic} onClick={(e) => window.location.href='#/quoteform?_q='+e.target.value} >Get Quote</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};
export default Product_display;
