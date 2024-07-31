import { dataBenefits } from "../../data/dataBenefits";
import TitleSection from "../../components/titleSection/TitleSection";
import styles from "./BenefitsSection.module.css";

export default function BenefitsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <TitleSection content="Beneficios de elegirnos" />
        <div className={styles.row}>
          {dataBenefits.map((benefit) => (
            <div className={styles.card} key={benefit.id}>
              <div className={styles.boxIcon}>{benefit.icon}</div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardParagraph}>{benefit.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
