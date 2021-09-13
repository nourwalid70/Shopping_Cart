import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
const Item = (props) => {
    const { item, addToCart, removeFromCart, deleteAll} = props;
    return (
        <div >
            <div >< FaTimesCircle onClick={() => deleteAll(item)} size={50} className="times"/></div>
            <p className="small" > <img src={item.image} alt={item.title} /></p>
            < h4 > {item.title}</h4>
            < FaMinusCircle onClick={() => removeFromCart(item)} size={50} className="minus"/>
            < p className="priceI" > {item.qty} X $ {item.price}</p>
            < FaPlusCircle onClick={() => addToCart(item)} size={50} className="plus"/>
        </div>
    );
}
export default Item;

