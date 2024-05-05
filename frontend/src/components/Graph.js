import React from 'react';
import { Container, Spinner, Ratio } from 'react-bootstrap';
import './css/Graph.css'; 

function Graph({ plotUrl, isLoading }) {
  return (
    <Container className="flex-grow-1">
      <h2 className="graph-heading">Predicted vs. Actual Prices</h2>
      <div className="graph-container">
        <Ratio aspectRatio="16x9" className="graph-ratio">
          {isLoading ? (
            <div className="graph-spinner">
              <Spinner animation="border" role="status" className="spinner">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : plotUrl ? (
            <img src={`data:image/png;base64,${plotUrl}`} alt="Predicted vs. Actual Prices" className="graph-image" />
          ) : (
            <div className="graph-message">No data available</div>
          )}
        </Ratio>
      </div>
    </Container>
  );
}

export default Graph;
