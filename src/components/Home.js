import Product from "./Product";
const Home = (props) => {
    const {products} = props;
    return(
        <div className="home">          
            <h2>Products</h2>
                {products.map((product) => (
                <div className="item">
                 <Product key={product.id} product={product}></Product>
                </div>
                ))}
           
        </div>
    )

}

export default Home;