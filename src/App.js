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
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=70', {
      method: 'GET'
    }).then(response => response.json()).then(data => {
      setproducts(data)
      console.log(products)
    })
  });
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
          <Route path="/" exact render={() => <Home products={products}/>}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/cart" exact component={Cart}></Route>
        </Switch>
       </BrowserRouter>
 
  );
}

export default App;
