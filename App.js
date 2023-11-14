import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchData from './api/index.js';

import Sustainability from './components/Sustainability.js';

function App() {
  
  const [customer, setCustomer] = useState(1);
  const [conveyancer, setConveyancer] = useState(0);

  function customerClickHandle(){
    setCustomer(1); 
    setConveyancer(0);
  }

  function customerClickHandle(){
    setCustomer(1); 
    setConveyancer(0);
  }

  function conveyancerClickHandle(){
    setCustomer(1); 
    setConveyancer(0);
  }

  useEffect(() => {
    const data = fetchData();
    console.log(data);
  }, []);

  return (
    <Container>
<label for="dropdown">Select an option:</label>
<select id="dropdown">
    <option value="customer" onClick = {customerClickHandle() }>Option 1</option>
    <option value="conveyancer" onClick = { conveyancerClickHandle()}>Option 2</option>
</select>
      <Row>
        <Col style={{ backgroundColor: "#005EB8", height: "75px" }}>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* this is for Crib Credentials */}
        </Col>
      </Row>
      <CribCredentials/>
      {conveyancer && <Conveyancer/>}
      {customer && <Sustainability/>}
    </Container>
  );
}

export default App;
