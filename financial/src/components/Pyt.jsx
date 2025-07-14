// src/components/Py.jsx
import React, { useState } from 'react';

function Py() {
  const [stock, setStock] = useState('GOOG');
  const [showChart, setShowChart] = useState(false);

  const handleLoad = () => {
    setShowChart(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>📈 Stock Chart Viewer</h2>
      <input
        type="text"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        placeholder="Enter stock symbol"
      />
      <button onClick={handleLoad} style={{ marginLeft: '10px' }}>
        Load Chart
      </button>

      {showChart && (
        <div style={{ marginTop: '20px' }}>
          <h3>Chart for {stock}</h3>
          <img
            src={`http://127.0.0.1:5000/plot?stock=${stock}`}
            alt={`Chart for ${stock}`}
            style={{ width: '100%', maxWidth: 600 }}
          />
        </div>
      )}
    </div>
  );
}

export default Py;
