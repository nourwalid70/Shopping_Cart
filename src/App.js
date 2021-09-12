import './App.css';
import {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiCart } from "react-icons/bi";
import Home from './components/Home';
import Cart from './components/Cart';
import About from './components/About';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Navbar, Container, Nav} from 'react-bootstrap';



function App() {
    
  const [products, setproducts] = useState([]);
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10', {
      method: 'GET'
    }).then(response => response.json()).then(data => {
      setproducts(data)
    })
    const getItems = async () => {
      const itemsFromServer = await fetchItems()
      setItems(itemsFromServer)
    }

    getItems()
  },[]);

  const addToCart = async (product) => {
    const exist = items.find((x) => x.id === product.id);
    let count=1;
    if (exist) {
      setItems(
        items.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      count=exist.qty+1;
    } else {
      setItems([...items, { ...product, qty: 1 }]);
    }
    console.log(product);
    await fetch('http://localhost:5000/items', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ ...product, qty:count}),
    })
    console.log(items);

  };

  const removeFromCart = async (product) => {
    console.log(product.id);
    console.log(product);
    const res = await fetch(`http://localhost:5000/items/${product.id}`, {
      method: 'DELETE',
    })
    const exist = items.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      res.status === 200
        ? setItems(items.filter((x) => x.id !== product.id))
        : alert('Error Deleting This Task')
    } else {

      res.status === 200
        ? setItems(
          items.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x) )
        : alert('Error Deleting This Task')

        await fetch('http://localhost:5000/items', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(product),
        })
    }
  };

  const deleteAll = (Product) => {
      Product.qty = 1;
    removeFromCart(Product);
  }

  const fetchItems = async () => {
    const res = await fetch('http://localhost:5000/items')
    const data = await res.json()

    return data
  }
  return (
     <BrowserRouter>
      <Navbar className="bar" fixed="top" expand="lg" variant="light">
        <Container>
          <Navbar.Brand><BiCart/> NaN shopping</Navbar.Brand>
          <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/cart">Cart</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
        <Switch>
        <Route path="/" exact render={() => <Home products={products} addToCart={addToCart}/>}></Route>
          <Route path="/about" exact component={About}></Route>
        <Route path="/cart" exact render={() => <Cart items={items} addToCart={addToCart}
          removeFromCart={removeFromCart} deleteAll={deleteAll}/>}></Route>
        </Switch>
       </BrowserRouter>
 
  );
}

export default App;
