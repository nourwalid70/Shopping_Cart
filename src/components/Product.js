import { AiOutlineShoppingCart } from "react-icons/ai";

const Product = (props) => {
  const { product, addToCart } = props;
  return (
    <div >
      <p className="small"><img src={product.image} alt={product.title} /></p>
      <h4>{product.title}</h4>
      <p className="price">$ {product.price}</p>
      <AiOutlineShoppingCart onClick={() => addToCart(product)} size={50} className="zr" />
    </div>
  );
}
export default Product;



 
