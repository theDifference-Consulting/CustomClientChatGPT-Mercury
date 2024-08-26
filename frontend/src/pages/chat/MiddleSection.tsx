import React from 'react';
import styles from './MiddleSection.module.css';

const MiddleSection = ({ onQuestionClick }: { onQuestionClick: (question: string) => void }) => {
  const questions = [
    "What are the key strategies used to identify zero-dose children in rural areas?",
    "How do the methods for identifying zero-dose children differ between urban and rural settings?",
    "What is the most cost-effective approach to reaching zero-dose children?"
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the learning assistant!</h1>
      <p className={styles.subtitle}>Here are some questions to get you started:</p>
      <div className={styles.buttonGroup}>
        {questions.map((question, index) => (
          <button
            key={index}
            className={styles.customButton}
            onClick={() => onQuestionClick(question)}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MiddleSection;
