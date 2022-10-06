import { useBetween } from "use-between";
import NavControl from "./NavControl";
import ResNav from "./ResNav";
import { useRef, useEffect, useState, useCallback } from "react";
const Product_display = (props) => {
  const productdetail = props.product_details;
  const useSharednavbar = () => useBetween(NavControl);
  const { opennavfc, closenavfc, opennav } = useSharednavbar();
  useEffect(() => {
     if(document.getElementsByClassName("What we offer?").length>0){
      
       document.getElementsByClassName("What we offer?")[0].addEventListener("click",()=>{
        document.getElementById("servicelist").scrollIntoView();
          setTimeout(()=>{document.getElementsByClassName("serviceholder")[0].classList.add("highlight");}, 500);
          

         
       })



       

     }
   
     
       
   },[]);
   
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
        {productdetail.product_list.map((products) => (
          <div className="product_display_holder">
            <img width={250} src={products.imglink}></img>
            <div className="products_holder">
              <h2>{products.topic}</h2>
              {products.details.map((details_point) => (
                <div className="product_name">{details_point}</div>
              ))}
              <button>Get Quote</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Product_display;
