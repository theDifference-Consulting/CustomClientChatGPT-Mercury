import React from 'react';
import styles from './MiddleSection.module.css';

const MiddleSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonGroup}>
        <button className={styles.customButton}>
          <span>Python script for daily email reports</span>
        </button>
        <button className={styles.customButton}>
          <span>Thank my interviewer</span>
        </button>
        <button className={styles.customButton}>
          <span>Fun fact about the Roman Empire</span>
        </button>
        <button className={styles.customButton}>
          <span>Morning routine for productivity</span>
        </button>
      </div>
    </div>
  );
};

export default MiddleSection;
