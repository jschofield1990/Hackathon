import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchInspectionData from './api/index.js';
import CribCrendentials from './Components/CribCredentials/index.jsx';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [inspectionData, setInspectionData] = useState([]);

  useEffect(() => {
    const data = fetchInspectionData(setIsLoading);
    setInspectionData(data);
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
          <CribCrendentials inspectionData={inspectionData} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
