import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchData from './api/index.js';

function App() {

  useEffect(() => {
    const data = fetchData();
    console.log(data);
  }, []);

  return (
    <Container>
      <Row>
        <Col style={{ backgroundColor: "#005EB8", height: "75px" }}>
          {/* this will be the header */}
        </Col>
      </Row>
      <Row>
        <Col>
          {/* this is for Crib Credentials */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
