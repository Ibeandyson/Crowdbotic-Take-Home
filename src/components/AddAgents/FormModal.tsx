import React, { FC, useState } from "react";
import { Modal, Button, Col, Row, Form } from "react-bootstrap";
import Axios from "axios";
interface Props {
  fetchInitialData(): void;
}

const FormModal: FC<Props> = (props) => {
  const [show, setShow] = useState<boolean>(false);
  const [userInfoData, setUserInfoData] = useState<object>({
    firstName: "",
    lastName: "",
    agentLicence: "",
    address: "",
    practiceAreas: "",
    aboutMe: "",
  });
  const [photoUrl, setPhotoUrl] = useState<
    string | ArrayBuffer | null | undefined
  >();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    firstName,
    lastName,
    agentLicence,
    address,
    practiceAreas,
    aboutMe,
  }: any = userInfoData;

  const onChangeHandler = (e: any) => {
    setUserInfoData({ ...userInfoData, [e.target.name]: e.target.value });
  };
  const onChangePhoto = (e: any) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
      setPhotoUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = () => {
    Axios.post(
      "/agent/add",
      {
        firstName: firstName,
        lastName: lastName,
        agentLicence: agentLicence,
        address: address,
        practiceAreas: practiceAreas,
        aboutMe: aboutMe,
        photoUrl: photoUrl,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res: any) => {
        console.log(res);
        props.fetchInitialData();
        setShow(false)
        setUserInfoData({
          firstName: "",
          lastName: "",
          agentLicence: "",
          address: "",
          practiceAreas: "",
          aboutMe: "",
        })
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <>
      <Button size="lg" variant="success" onClick={handleShow}>
        Join the team
      </Button>
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
              <Form.Control
                name="firstName"
                value={firstName}
                onChange={(e) => onChangeHandler(e)}
                size="lg"
                type="text"
                placeholder="First Name"
              />
            </Col>
            <Col className="py-3 px-3" sm={12} md={6}>
              <Form.Control
                name="lastName"
                value={lastName}
                onChange={(e) => onChangeHandler(e)}
                size="lg"
                type="text"
                placeholder="Last Name"
              />
            </Col>
            <Col className="py-3 px-3" sm={12} md={6}>
              <Form.Control
                name="agentLicence"
                value={agentLicence}
                onChange={(e) => onChangeHandler(e)}
                size="lg"
                type="text"
                placeholder="Agent Licence"
              />
            </Col>
            <Col className="py-3 px-3" sm={12} md={6}>
              <Form.Control
                name="address"
                value={address}
                onChange={(e) => onChangeHandler(e)}
                size="lg"
                type="text"
                placeholder="Address"
              />
            </Col>
            <Col className="py-3 px-3" sm={12} md={6}>
              <Form.Control
                name="practiceAreas"
                value={practiceAreas}
                onChange={(e) => onChangeHandler(e)}
                size="lg"
                type="text"
                placeholder="Practice Areas"
              />
            </Col>
            <Col className="py-3 px-3" sm={12} md={6}>
              <Form.Group className="position-relative mb-3">
                <Form.Control
                  onChange={(e) => onChangePhoto(e)}
                  type="file"
                  name="file"
                />
              </Form.Group>
            </Col>
            <Col className="py-3 px-3" sm={12}>
              <Form.Control
                size="lg"
                type="text"
                as="textarea"
                name="aboutMe"
                value={aboutMe}
                onChange={(e) => onChangeHandler(e)}
                placeholder="About"
                style={{ height: "100px" }}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button size="lg" variant="success" onClick={onSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default FormModal;
