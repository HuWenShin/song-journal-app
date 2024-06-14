import React, { useState } from 'react';
import styles from './QuestionForm.module.css';

export default function QuestionForm(props) {
  const [answer, setAnswer] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');

  const emojiList = [
    { emoji: '😂', description: 'Joyful' },
    { emoji: '😊', description: 'Happy' },
    { emoji: '😍', description: 'Love' },
    { emoji: '😳', description: 'Nervous' },
    { emoji: '😬', description: 'Anxious' },
    { emoji: '😡', description: 'Angry' },
    { emoji: '🥲', description: 'Sad' },
    { emoji: '🤕', description: 'Hurt' },
    { emoji: '😒', description: 'Annoyed' }
  ];
  const [selectedEmoji, setSelectedEmoji] = useState(null);


  const handleSubmit = (event) => {
    event.preventDefault(); 
    props.onSubmit(answer);
  };

  const handleNext = (event) => {
    event.preventDefault(); 
    props.onNext(answer);
  };

  const handleClick = (event) => {
    event.preventDefault(); 
    props.onClick(answer)
  };

  const handleEmoji = (emoji, description) => {
    if (selectedEmoji === emoji) {
      setSelectedEmoji(null); 
      setSelectedDescription('');
    } else {
      setSelectedEmoji(emoji); 
      setSelectedDescription(description);
    }
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
          <div>
          {props.number == 2 ? (
             <div>
              <div className={styles.emojiList}>
                  {emojiList.map(({ emoji, description }, index) => (
                    <div key={index} className={styles.emojiContainer}>
                      <button
                        type="button" // Set type to "button" to prevent form submission
                        className={`${styles.emojiButton} ${selectedEmoji === emoji ? styles.selected : ''}`}
                        onClick={() => handleEmoji(emoji, description)}
                      >
                        {emoji}
                      </button>
                    </div>
                  ))}
                </div>
                <div className={styles.selectedEmoji}>
                  {selectedEmoji && (
                    <>
                      <button className={styles.enlargedEmoji} onClick={() => handleEmoji(null, '')}>
                        {selectedEmoji}
                      </button>
                      <p className={styles.emojiDescription}>{selectedDescription}</p>
                    </>
                  )}
                </div>
             </div>
         ) : <textarea
            rows={5}
            cols={50}
            className={styles.textarea}
            value={answer}
            onChange={handleChange} 
          />}
          </div>


          <div className={styles.formGroup}>
            {props.number != 1 && (
                <button className = {styles.backButton} onClick={handleClick}>
                 <img src="images/back-button.png" alt="go back" border="0" />
                </button>
            )}

            {props.number == 5 ? (
             <button type="submit" className={styles.button}>
                 Submit 
            </button>
            ) : <button type="button" className={styles.button} onClick={handleNext}>
                 Next
          </button>}



          </div>

        </form>
      </div>
    </div>
  );
}
