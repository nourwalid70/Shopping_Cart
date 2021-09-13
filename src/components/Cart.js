import Item from "./Item";
import Modalbox from "./Modalbox";

const Cart = (props) => {
    const { items, addToCart, removeFromCart, deleteAll} = props;
    const len = items.length;
    
    return(
        <div className="cart">
            {len>0 ? (<Modalbox className="modalB"></Modalbox>) : (<p className="cartI">No items in the cart to show !</p>)}<br/>
            {items.map((item) => (
                <div className="item">
                    <Item item={item} key={item.id} addToCart={addToCart} removeFromCart={removeFromCart} deleteAll={deleteAll}></Item>
                </div>
            ))}
        </div>
    )

}

export default Cart;