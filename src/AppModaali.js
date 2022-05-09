import React, { useState, useEffect, Component, Col } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

{/* modaali-ikkuna joka aukeaa kun käyttäjä painaa submit-nappia -> "tilausvahvistus" joka näyttää annetut tiedot taulukkomuotoisena */}

function AppModaali(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="btn btn-dark btn-lg" onClick={handleShow}>Submit your order</Button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Order details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Please check that your order details are correct:</h5>
          <table>
            <th>Tietoa</th>
            <td>* Tänne tulis tilaustiedot taulukkomuodossa *</td>
          </table>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          {/* <Button as={Col} variant="primary" onClick={this.addUniform}>Submit your order</Button> */}
        </Modal.Footer>

      </Modal>
    </>
  );
}
//

/*   render(<AppModaali />) */


export default AppModaali;