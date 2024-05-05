import React from 'react';
import { Container, Badge } from 'react-bootstrap';
import { FaRegMeh, FaRegSmile, FaRegFrown } from 'react-icons/fa';
import './css/SentimentCounts.css'; 

function SentimentCounts({ sentimentCounts }) {
  return (
    <Container className="flex-grow-1">
      <div className="sentiment-container">
        <h2 className="sentiment-heading">Sentiment Counts</h2>
        <div className="sentiment-icons">
          <div className="sentiment-icon positive">
            <FaRegSmile className="icon" />
            <p className="sentiment-label positive">Positive</p>
            <Badge bg="success" className="sentiment-badge">{sentimentCounts.positive}</Badge>
          </div>
          <div className="sentiment-icon neutral">
            <FaRegMeh className="icon" />
            <p className="sentiment-label neutral">Neutral</p>
            <Badge bg="warning" className="sentiment-badge">{sentimentCounts.neutral}</Badge>
          </div>
          <div className="sentiment-icon negative">
            <FaRegFrown className="icon" />
            <p className="sentiment-label negative">Negative</p>
            <Badge bg="danger" className="sentiment-badge">{sentimentCounts.negative}</Badge>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SentimentCounts;
