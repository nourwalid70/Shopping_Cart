import Item from "./Item";
const Cart = (props) => {
    const { items, addToCart, removeFromCart, deleteAll} = props;
    
    return(
        <>
            {items.map((item) => (
                <div className="item">
                    <Item item={item} key={item.id} addToCart={addToCart} removeFromCart={removeFromCart} deleteAll={deleteAll}></Item>
                </div>
            ))}
        </>
    )

}

export default Cart;