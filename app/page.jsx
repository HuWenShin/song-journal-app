"use client"; 

import React, { useState } from 'react';
import styles from './page.module.css';
import QuestionForm from './components/userComponents/QuestionForm';

export default function Home() {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);

  const handleFormSubmit = () => {
   // probably have to save the data later on when connecting the data with backend
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  };

  return (
    <main className="min-h-screen"> 
      <div className={styles.container}>
        <div className={styles.questionForm}>
    
          {currentQuestionNumber === 1 && (
            <QuestionForm
              number="1"
              question="Describe Your Day"
              onSubmit={handleFormSubmit} 
            />
          )}
          {currentQuestionNumber === 2 && (
            <QuestionForm
              number="2"
              question="How are you feeling right now?"
              onSubmit={handleFormSubmit}
            />
          )}
           {currentQuestionNumber === 3 && (
            <QuestionForm
              number="3"
              question="What made you feel that way?"
              onSubmit={handleFormSubmit}
            />
          )}
           {currentQuestionNumber === 4 && (
            <QuestionForm
              number="4"
              question={<>What did you learn today,<br />whether about yourself or the world around you?</>}
              onSubmit={handleFormSubmit}
            />
          )}
            {currentQuestionNumber === 5 && (
            <QuestionForm
              number="5"
              question={<>What is one thing you can do today <br /> to get closer to your goal?</>}
              // onSubmit={handleFormSubmit} has to be updated 
            />
          )}
        </div>
      </div>
    </main>
  );
}
