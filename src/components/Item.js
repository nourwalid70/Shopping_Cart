import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
const Item = (props) => {
    const { item, addToCart, removeFromCart, deleteAll} = props;
    return (
        <div >
            <p className="small" > <img src={item.image} alt={item.title} /></p>
            < h4 > {item.title}</h4>
            < p className="price" > $ {item.price}</p>
            < FaPlusCircle onClick={() => addToCart(item)} size={50} className="zr" />
            < FaMinusCircle onClick={() => removeFromCart(item)} size={50} />
            < FaTimesCircle onClick={() => deleteAll(item)} size={50} />
        </div>
    );
}
export default Item;

