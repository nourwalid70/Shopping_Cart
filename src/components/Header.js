import { Navbar, Container, Nav } from 'react-bootstrap';
import { BiCart } from "react-icons/bi";

const Header = () => {
    return (
        <Navbar className="bar" fixed="top" expand="lg" variant="light">
            <Container>
                <Navbar.Brand><BiCart /> NaN shopping</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )

}

export default Header;