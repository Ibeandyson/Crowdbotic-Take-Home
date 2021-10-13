import { FC } from "react";
import { Modal, Image, Col, Row } from "react-bootstrap";
interface Props {
  handleCloseDetailsModal(): void;
  showDetailsModal: object;
}

const DetailsModal: FC<Props> = (props) => {
  const { show, value }: any = props.showDetailsModal;

  return (
    <>
      <Modal
        show={show}
        onHide={props.handleCloseDetailsModal}
        scrollable={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className="py-3 px-3 text-center" sm={12}>
              <Image
                style={{ height: "200px", width: "200px" }}
                src={value?.photoUrl}
                alt={value?.firstName}
                roundedCircle
              />
            </Col>
            <Col className="py-3 px-3" sm={12} md={6}>
              <p>
                <b>Name</b>
              </p>
              <p> {value?.firstName + " " + value?.lastName}</p>
            </Col>
            <Col className="py-3 px-3" sm={12} md={6}>
              <p>
                <b>Address</b>
              </p>
              <p>{value?.address}</p>
            </Col>
            <Col className="py-3 px-3" sm={12} md={6}>
              <p>
                <b>Agent Licence</b>
              </p>
              <p>{value?.agentLicence}</p>
            </Col>
            <Col className="py-3 px-3" sm={12} md={6}>
              <p>
                <b>Practice Areas</b>
              </p>
              <p>{value?.practiceAreas}</p>
            </Col>
            <Col className="py-3 px-3" sm={12}>
              <p>
                <b>About</b>
              </p>
              <p>{value?.aboutMe}</p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default DetailsModal;
