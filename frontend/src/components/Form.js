import React from 'react';
import { Container, Form as BootstrapForm, Button, Alert } from 'react-bootstrap'; 
import DatasetSelector from './DatasetSelector';
import ModelSelector from './ModelSelector';
import styles from './css/Form.module.css';

function Form({ selectedDataset, selectedModel, onSubmit, onChangeDataset, onChangeModel, isLoading, submissionMessage, submissionStatus }) {
  return (
    <Container className={styles.formContainer}>
      <h1 className={styles.formTitle}>Stock Price Prediction</h1>
      <p className={styles.formDescription}>Select the dataset and model to predict stock prices:</p>
      {submissionMessage && (
        <Alert variant={submissionStatus === 'danger' ? 'danger' : 'success'} className={styles.submissionMessage}>
          {submissionMessage}
        </Alert>
      )}
      <BootstrapForm onSubmit={onSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <DatasetSelector value={selectedDataset} onChange={onChangeDataset} />
          <ModelSelector value={selectedModel} onChange={onChangeModel} />
        </div>
        <Button type="submit" variant="primary" className={styles.submitButton} disabled={isLoading}>
          {isLoading ? 'Data processing....' : 'Submit'}
        </Button>
      </BootstrapForm>
    </Container>
  );
}

export default Form;
