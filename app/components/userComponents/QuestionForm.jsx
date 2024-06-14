import styles from './QuestionForm.module.css';

export default function QuestionForm(props) {
    return (
        <div className={styles.container}>
            <div className={styles.question}>
                <h1>({props.number}/5)</h1>
                <h2>{props.question}</h2>
                <form>
                    <div className={styles.formGroup}>
                        <textarea
                            rows={5}
                            cols={50}
                            className={styles.textarea}
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
};
