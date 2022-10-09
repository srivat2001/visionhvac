import { useBetween } from "use-between";
import NavControl from "./NavControl";
import ResNav from "./ResNav";
import $, { event } from 'jquery';
import React,{ useRef, useEffect, useState, useCallback } from "react";
const Product_display = (props) => {
  const productdetail = props.product_details;
  const useSharednavbar = () => useBetween(NavControl);
  const { opennavfc, closenavfc, opennav } = useSharednavbar();
 
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
          document.getElementsByClassName("highlight_background")[1].style.opacity=0;
          setTimeout(()=>{

            document.getElementsByClassName("highlight_background")[0].remove()
            document.getElementsByClassName("highlight_background")[1].remove()
            document.getElementsByClassName("serviceholder")[0].classList.remove("highlight")



          },500);
      
      
      }, 2000);  

         
       })
 


       

     
   
      
   },[]);
   const getquote=(product)=>{
    
   }
  return (
     
    <div>
  
      <center>
        <h1>{productdetail.mainhead}</h1>
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
              <button value={products.topic} onClick={(e) => window.location.href='quoteform?_q='+e.target.value} >Get Quote</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};
export default Product_display;
