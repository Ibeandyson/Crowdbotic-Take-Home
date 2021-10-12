import type { FC } from "react";
import { useState, useEffect } from "react";
import Agent from "./Agent";
import { IAgent } from "../../types/Agent";
import FormModal from "../AddAgents/FormModal";
import HeaderNav from "../Navigation/HeaderNav";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

const Agents: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);

  async function fetchInitialData() {
    const response = await axios.get("/agents");
    setAgents(response.data);
  }
  async function fetchDataPracticeAreas(data: string) {
    const response = await axios.get(`/agents/practice-areas/${data}`);
    setAgents([response.data]);
     console.log(response.data)
  }
  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <div>
      <HeaderNav fetchDataPracticeAreas={fetchDataPracticeAreas} />
      <div className="mx-5 my-5">
        <Row className="mt-5">
          {agents.map((agent) => (
            <Col className="px-2 py-2" sm={12} md={3} lg={3}>
              <Agent key={agent.id} agent={agent} />
            </Col>
          ))}
        </Row>
        <div className="mt-5 text-center">
          <FormModal fetchInitialData={fetchInitialData} />
        </div>
      </div>
    </div>
  );
};

export default Agents;
