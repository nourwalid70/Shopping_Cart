import { Modal, Button } from "react-bootstrap";
import { useState } from 'react'

const Modalbox =() => {
  const [isOpen, setState] = useState(false)
  const openModal = () => { setState(true) };
  const closeModal = () => { setState(false) };
    return (
      <>
          <Button variant="primary" onClick={openModal}>Checkout
          </Button>
        <Modal show={isOpen} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Checkout</Modal.Title>
          </Modal.Header>

          <Modal.Body>            
            <input type="text" placeholder="Your Full name"/>
            <input type="text" placeholder="Your E-mail" />
            <input type="text" placeholder="Your phone number" />
            <input type="text" placeholder="Your Country" />
            <input type="text" placeholder="Your Address" />
            </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Complete Checkout
            </Button>
          </Modal.Footer>
          
        </Modal>
      </>

    ); 
}


export default Modalbox;