import { Modal, Button } from "react-bootstrap";
import { useState } from 'react'

const Modalbox =(props) => {
  const [isOpen, setState] = useState(false)
  const openModal = () => { setState(true) };
  const closeModal = () => { setState(false) };
  const completeCheckout = () => {
    closeModal();
   alert('Your purchase is completed. A confirmation e-mail with all your purchase informaion has been sent to you to track your delivery');
  }
    return (
      <>
          <Button variant="primary" onClick={openModal}>Checkout
          </Button>
        <Modal show={isOpen} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Checkout</Modal.Title>
          </Modal.Header>
          <form>
          <Modal.Body>            
            <input className="info" type="text" placeholder="Your Full name" required/>
            <input className="info" type="text" placeholder="Your E-mail" required/>
            <input className="info" type="text" placeholder="Your phone number" required/>
            <input className="info" type="text" placeholder="Your Country" required/>
            <input className="info" type="text" placeholder="Your Address" required/>
            </Modal.Body>

          <Modal.Footer>
              <Button style={{ backgroundColor: "darkblue" }} className="btn" variant="secondary" onClick={completeCheckout}>
              Complete Checkout
            </Button>
           
          </Modal.Footer>
          </form>
        </Modal>
      </>

    ); 
}


export default Modalbox;