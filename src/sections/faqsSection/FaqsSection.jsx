import { dataFaqs } from "../../data/dataFaqs";
import TitleSection from "../../components/titleSection/TitleSection";
import styles from "./FaqsSection.module.css";
import ChevronDownIcon from "../../icons/ChevronDownIcon";

export default function FaqsSection() {
  return (
    <section className={styles.section} aria-label="Preguntas Frecuentes">
      <div className={styles.container}>
        <TitleSection content="Preguntas Frecuentes" />
        <div className={styles.row}>
          {dataFaqs.map((faq) => (
            <div className={styles.faqsContainer} key={faq.id}>
              <div className={styles.col1}>
                <span className={styles.faqsNumber}>{faq.number}</span>
              </div>
              <div className={styles.col2}>
                <details>
                  <summary className={styles.questionContainer} tabIndex={0}>
                    <h3 className={styles.question}>{faq.question}</h3>
                    <ChevronDownIcon className={styles.questionIcon} />
                  </summary>
                  <div className={styles.answerContainer}>
                    <p className={styles.answer}>{faq.answer}</p>
                  </div>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
