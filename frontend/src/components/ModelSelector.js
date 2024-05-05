import React from 'react';
import './css/ModelSelector.css'; 

function ModelSelector({ value, onChange }) {
  return (
    <div className="model-selector">
      <label htmlFor="model" className="selector-label">🛠️ Select Model:</label>
      <select id="model" className="selector" value={value} onChange={onChange}>
        <option value="lstm">🔍 LSTM</option>
        <option value="gru">🧠 GRU</option>
      </select>
    </div>
  );
}

export default ModelSelector;
