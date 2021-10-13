import type { FC } from "react";
import { Col, Card, Button } from "react-bootstrap";

import "./Agent.css";

export interface IAgent {
  handleShowDetailsModal(value: object): void;
  agent: object;
}

const Agent: FC<IAgent> = (props) => {
  const { firstName, lastName, photoUrl, address }: any = props.agent;
  return (
    <div>
      <Card>
        <Card.Img
          style={{ height: "200px", objectFit: "cover" }}
          variant="top"
          src={photoUrl}
          alt={firstName}
        />
        <Card.Body>
          <Card.Title>{firstName + " " + lastName}</Card.Title>
          <Card.Text>{address}</Card.Text>
          <Button
            onClick={() => props.handleShowDetailsModal(props.agent)}
            size="lg"
            variant="success"
          >
            View
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Agent;
