import React, { useState } from 'react';
import '../Temparature/Temparature.css';

function TemperatureConverter() {
  const [temperature, setTemperature] = useState('');
  const [originalUnit, setOriginalUnit] = useState('Celsius');
  const [convertedTemperatures, setConvertedTemperatures] = useState(null);

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };

  const handleUnitChange = (e) => {
    setOriginalUnit(e.target.value);
  };

  const convertTemperature = () => {
    let celsius, fahrenheit, kelvin;

    // Convert the input temperature to all units
    if (originalUnit === 'Celsius') {
      celsius = parseFloat(temperature);
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = celsius + 273.15;
    } else if (originalUnit === 'Fahrenheit') {
      fahrenheit = parseFloat(temperature);
      celsius = (fahrenheit - 32) * 5/9;
      kelvin = (fahrenheit - 32) * 5/9 + 273.15;
    } else if (originalUnit === 'Kelvin') {
      kelvin = parseFloat(temperature);
      celsius = kelvin - 273.15;
      fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    }

    // Set the converted temperatures after clicking the "Convert" button
    setConvertedTemperatures({
      Fahrenheit: fahrenheit.toFixed(2),
      Celsius: celsius.toFixed(2),
      Kelvin: kelvin.toFixed(2),
    });
  };

  return (
    <div className='temperature-converter-container'>
      <div className='container'>
        <h2>Temperature Converter</h2>
        <label>
          Temperature:
          <input type="number" value={temperature} onChange={handleTemperatureChange} />
        </label>
        <label>
          Original Unit:
          <select value={originalUnit} onChange={handleUnitChange}>
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Kelvin">Kelvin</option>
          </select>
        </label>
        <button onClick={convertTemperature}>Convert</button>
        {convertedTemperatures && (
          <div>
            {originalUnit !== 'Celsius' && <p>Celsius: {convertedTemperatures.Celsius}</p>}
            {originalUnit !== 'Fahrenheit' && <p>Fahrenheit: {convertedTemperatures.Fahrenheit}</p>}
            {originalUnit !== 'Kelvin' && <p>Kelvin: {convertedTemperatures.Kelvin}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default TemperatureConverter;
