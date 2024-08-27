import React from 'react';
import styles from './MiddleSection.module.css';

const MiddleSection = ({ onQuestionClick }: { onQuestionClick: (question: string) => void }) => {
  const questions = [
    "What types of questions can I ask you?",
    "What research methods were used?", 
    "Give me a glossary of frequently used terms.",
    "Summarize some key findings of the project."
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
