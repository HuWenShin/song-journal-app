import styles from './page.module.css'
import QuestionForm from './components/userComponents/QuestionForm';


export default function Home() {
  return (
    <main className="min-h-screen"> 
      <div className = {styles.container}>
        
        <div className={styles.questionForm}>
          <QuestionForm number="1" question = "Describe Your Day"/>
        </div>
      </div>
    </main>
  );
}

