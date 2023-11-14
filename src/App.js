import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchInspectionData from './api/index.js';
import CribCrendentials from './Components/CribCredentials/index.jsx';
import axios from 'axios';
import Conveyancer from './Components/CribCredentials/Conveyancer/Index.jsx';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [inspectionData, setInspectionData] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const { data } = await axios.get(`https://get-hackdata.azurewebsites.net/api/get-inspection-data?code=7dmx_V2A6ZgyAlXiy1lRFZ415KNL1UsYj1b1QnNjcGydAzFuPdygKQ==&&columnName=UPRN&&columnValue=10014104298`);
    setInspectionData(data[0]);
    console.log(data[0])
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Row>
        <Col style={{ backgroundColor: "#005EB8", height: "75px" }}>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* this is for Crib Credentials */}
          <CribCrendentials inspectionData={inspectionData} isLoading={isLoading} />
        </Col>
      </Row>
      <Conveyancer />
      <Row>
        <Col style={{ backgroundColor: "rgb(7,29,73)", height: "250px", marginTop:"20px" }}>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
