import React, { useState } from 'react';
import styles from './QuestionForm.module.css';

export default function QuestionForm(props) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    props.onSubmit(answer);
  };

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.question}>
        <h1>({props.number}/5)</h1>
        <h2>{props.question}</h2>
        <form onSubmit={handleSubmit}> 
          <div className={styles.formGroup}>
            <textarea
              rows={5}
              cols={50}
              className={styles.textarea}
              value={answer}
              onChange={handleChange} 
            />
          </div>
          <div className={styles.formGroup}>
            <button type="submit" className={styles.button}>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
