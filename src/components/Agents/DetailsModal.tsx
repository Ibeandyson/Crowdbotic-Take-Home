import React, { FC, useState } from "react";
import { Modal, Button, Col, Row, Form } from "react-bootstrap";
interface Props {
  fetchInitialData(): void;
}

const DetailsModal: FC<Props> = (props) => {
  const [show, setShow] = useState<boolean>(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        scrollable={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Enter Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className="py-3 px-3" sm={12} md={6}>
             
             
            </Col>
            </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default DetailsModal;
