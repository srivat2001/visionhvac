import Rightside from '../Rightside/Topform';
import Footer from '../Footer/Footer';
const Notfound=()=>{

    const product_display_holder = 
    {
      mainhead:":(",
      subhead:"Page Not Found",
      product_list: [      ]
      }

    return(
        <div>
<Rightside  type="productdisplay" product_display_Banner={product_display_holder}  />
<Footer/>

</div>
    )
}
export default Notfound