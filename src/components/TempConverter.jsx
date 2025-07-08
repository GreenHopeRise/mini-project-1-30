import React, { useState } from "react";

const TempConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  // Celsius change korle fahrenheit auto update
  const handleCelsiusChange = (e) => {
    const c = e.target.value;
    setCelsius(c);
    if (c === "") {
      setFahrenheit("");
    } else {
      const f = (parseFloat(c) * 9 / 5 + 32).toFixed(2);
      setFahrenheit(f);
    }
  };

  // Fahrenheit change korle celsius auto update
  const handleFahrenheitChange = (e) => {
    const f = e.target.value;
    setFahrenheit(f);
    if (f === "") {
      setCelsius("");
    } else {
      const c = ((parseFloat(f) - 32) * 5 / 9).toFixed(2);
      setCelsius(c);
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
        <h1>Temp Converter</h1>
      <div style={{ marginBottom: "20px" }}>
        <label>
          Celsius:
          <input
            type="number"
            value={celsius}
            onChange={handleCelsiusChange}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>

      <div>
        <label>
          Fahrenheit:
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>
    </div>
  );
};

export default TempConverter;
