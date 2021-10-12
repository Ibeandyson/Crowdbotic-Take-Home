import type { FC } from "react";
import { IAgent } from "../../types/Agent";
import { Col, Card, Button } from "react-bootstrap";

import "./Agent.css";

const Agent: FC<{ agent: IAgent }> = ({ agent }) => {
  return (
    <div>
      <Card>
        <Card.Img style={{height: "200px",objectFit: "cover"}} variant="top" src={agent.photoUrl} alt={agent.firstName} />
        <Card.Body>
          <Card.Title>{agent.firstName + " " + agent.lastName}</Card.Title>
          <Card.Text>{agent.address}</Card.Text>
          <Button  size="lg" variant="success">View</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Agent;
