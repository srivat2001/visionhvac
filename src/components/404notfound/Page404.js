import Rightside from '../Rightside/Topform';
import Footer from '../Footer/Footer';
const Notfound=()=>{

    const product_display_holder = 
    {
      mainhead:":(",
      subhead:"Page Not Found",
      product_list: [          {  
        topic:"Check If you Entered URL Correctly",
         details:[],
          imglink:"https://www.pngkey.com/png/detail/212-2124171_404-error-404-pagina-no-encontrada.png"
      }]
      }

    return(
        <div>
<Rightside  type="productdisplay" product_display_Banner={product_display_holder}  />
<Footer/>

</div>
    )
}
export default Notfound