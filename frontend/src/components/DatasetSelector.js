import React from 'react';
import './css/DatasetSelector.css'; // Import CSS file

function DatasetSelector({ value, onChange }) {
  return (
    <div className="dataset-selector">
      <label htmlFor="dataset" className="selector-label">📊 Select Dataset:</label>
      <select id="dataset" className="selector" value={value} onChange={onChange}>
        <option value="DutchBanglaBankFinbert.csv">🏦 Dutch Bangla Bank</option>
        <option value="CityBankFinbert.csv">🏛️ City Bank</option>
        <option value="AgraniBankFinbert.csv">🏦 Agrani Bank</option>
        <option value="EasternBankLimitedFinbert.csv">🏛️ Eastern Bank Limited</option>
        <option value="IslamiBankFinbert.csv">🏦 Islami Bank</option>
        <option value="JanataBankFinbert.csv">🏛️ Janata Bank</option>
        <option value="SonaliBankFinbert.csv">🏦 Sonali Bank</option>
        {/* Add more options for different datasets */}
      </select>
    </div>
  );
}

export default DatasetSelector;
