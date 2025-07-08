import React, { useState } from 'react';

const DeepClone = () => {
    const original = {
    name: "Khalid",
    details: {
      age: 25,
      skills: ["React", "JS", { framework: "Next.js" }]
    }
  };

  const [clone, setClone] = useState({});

  // Recursive deep clone function
  function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;

    if (Array.isArray(obj)) {
      let arrCopy = [];
      for (let item of obj) {
        arrCopy.push(deepClone(item));
      }
      return arrCopy;
    }

    let objCopy = {};
    for (let key in obj) {
      objCopy[key] = deepClone(obj[key]);
    }
    return objCopy;
  }

  const handleClone = () => {
    const clonedObj = deepClone(original);
    setClone(clonedObj);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Original Object:</h2>
      <pre>{JSON.stringify(original, null, 2)}</pre>

      <button onClick={handleClone}>Deep Clone</button>

      <h2>Cloned Object:</h2>
      <pre>{JSON.stringify(clone, null, 2)}</pre>
    </div>
  );
};

export default DeepClone;