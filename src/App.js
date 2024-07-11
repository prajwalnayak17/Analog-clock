import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getAngle = (value, max) => {
    return (value / max) * 360;
  };

  const getHandStyle = (value, max) => {
    const rotation = getAngle(value, max);
    return {
      transform: `rotate(${rotation}deg)`,
      transformOrigin: "bottom center",
    };
  };

  return (
    <div className="container">
      <div className="clock">
        <div className="clock-face">
          <div
            className="hand hour"
            style={getHandStyle(date.getHours() % 12, 12)}
          ></div>
          <div
            className="hand minute"
            style={getHandStyle(date.getMinutes(), 60)}
          ></div>
          <div
            className="hand second"
            style={getHandStyle(date.getSeconds(), 60)}
          ></div>
        </div>
      </div>
      </div>
    
  );
}

export default App;
