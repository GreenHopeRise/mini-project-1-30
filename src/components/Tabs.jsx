import React, { useState } from "react";

const Tabs = () => {
  const tabs = ["Home", "About", "Contact"];
  const [activeIndex, setActiveIndex] = useState();
  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Tabs Change</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              padding: "10px 20px",
              border: "1px solid black",
              backgroundColor: activeIndex === index ? "black" : "white",
              color: activeIndex === index ? "white" : "black",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div
        style={{
          marginTop: '30px',
          padding: '20px',
          border: '1px solid gray',
          borderRadius: '5px',
        }}
      >
        {tabs[activeIndex]} content is showing here!
      </div>
    </div>
  );
};

export default Tabs;
