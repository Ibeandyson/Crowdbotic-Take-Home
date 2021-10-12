import { FC, useState } from "react";
import { Navbar, Form, Button, Row, Col } from "react-bootstrap";

interface Props {
  fetchDataPracticeAreas(data: string): void;
}

const HeaderNav: FC<Props> = (props) => {
  const [search, setSearch] = useState<string>("");

  const onChangeHandler = (e: any) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <div className="justify-center mx-5 my-2 text-center">
          <Row>
            <Col xs={8}>
              <Form.Control
                size="lg"
                type="text"
                value={search}
                placeholder="search by name"
                onChange={(e) => onChangeHandler(e)}
              />
            </Col>
            <Col xs={4}>
              {" "}
              <Button
                onClick={() => props.fetchDataPracticeAreas(search)}
                size="lg"
                variant="success"
              >
                Search
              </Button>
            </Col>
          </Row>
        </div>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
