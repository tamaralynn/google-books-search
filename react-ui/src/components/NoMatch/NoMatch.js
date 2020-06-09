import React from "react";
import { Col, Row, Container } from "../Grid";
const axios = require("axios");

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <h1>Sorry, We Can'r find that one!</h1>
            {axios.get('https://dog.ceo/api/breeds/image/random')
            }
          <h3>Don't be sad, here's a dog</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;