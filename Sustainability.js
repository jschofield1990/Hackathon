import React, { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';

export default function Sustainability() {

    // State variables to store slider values
    const [co2Emissions, setco2EmissionsValue] = useState(2.3);
    const [windowType, setWindowType] = useState("Single Glazed");
    const [energyEfficiency, setEnergyEfficiency] = useState("Average");


    const windowMarks = [
      {
        value: 0,
        label: 'Single Glazed'
      },
      {
        value: 25,
        label: 'Partial double glazing'
      },
      {
        value: 50,
        label: 'Mostly Double Glazed'
      },
      {
        value: 75,
        label: 'Fully Double glazed'
      },
      {
        value: 100,
        label: 'High performance glazing'
      },
    ];

    const lightingMarks = [
      {
        value: 0,
        label: 'Poor'
      },
      {
        value: 25,
        label: 'Fair'
      },
      {
        value: 50,
        label: 'Average'
      },
      {
        value: 75,
        label: 'Good'
      },
      {
        value: 100,
        label: 'Very Good'
      },
    ];

    useEffect(() => {
      calculateEPC()
    });

    // Event handlers for slider value changes
    function handleCO2Change(value){
      setco2EmissionsValue(value.target.value);
    };

    function handleWindowType(value) {
      setWindowType(value.target.value);
    };

    function handleEnergyEfficiency(value) {
      setEnergyEfficiency(value.target.value);
    };

    function calculateEPC(){
      var total = Math.round(co2Emissions + windowType + energyEfficiency);
      return total * 200;
    };
    
    return(
      <>
      <h1 style={{ background: 'linear-gradient(45deg, #ff7300, #eaeaea)', WebkitBackgroundClip: 'text', color: 'black' }}>Sustainability</h1>

      <h2 style={{ textShadow: '3px 3px 5px #888888' }} >EPC current rating: D</h2>
      <h2 style={{ textShadow: '3px 3px 5px #888888' }} >EPC potential rating: A</h2>
            
      <h3 style={{ borderBottom: '2px solid transparent', transition: 'borderColor 0.3s', cursor: 'pointer' }}
  onMouseOver={(e) => (e.target.style.borderColor = '#3498db')}
  onMouseOut={(e) => (e.target.style.borderColor = 'transparent')}>CO2Emissions: {co2Emissions}</h3>
      <Slider
        value={co2Emissions}
        onChange={handleCO2Change}
        min={0}
        step={0.1}
        max={10}
        valueLabelDisplay='True'
      />

      <h3 style={{ borderBottom: '2px solid transparent', transition: 'borderColor 0.3s', cursor: 'pointer' }}
  onMouseOver={(e) => (e.target.style.borderColor = '#3498db')}
  onMouseOut={(e) => (e.target.style.borderColor = 'transparent')}>Window Type</h3>
      <Slider
        value={windowType}
        onChange={handleWindowType}
        marks = {windowMarks}
        step = {25}
      />

      <h3 style={{ borderBottom: '2px solid transparent', transition: 'borderColor 0.3s', cursor: 'pointer' }}
  onMouseOver={(e) => (e.target.style.borderColor = '#3498db')}
  onMouseOut={(e) => (e.target.style.borderColor = 'transparent')}>Lighting Energy Efficiency</h3>
      <Slider
        value={energyEfficiency}
        onChange={handleEnergyEfficiency}
        marks = {lightingMarks}
        step = {25}
      />

      <h4   style={{ color: '#3498db', transition: 'color 0.5s' }}
  onMouseOver={(e) => (e.target.style.color = '#e74c3c')}
  onMouseOut={(e) => (e.target.style.color = '#3498db')}>Potential increase in value = £{calculateEPC()}</h4>
      <br></br>
      <br></br>

      <h3></h3>
      </>
    );
}



// retrofit
// solar panels
// heating