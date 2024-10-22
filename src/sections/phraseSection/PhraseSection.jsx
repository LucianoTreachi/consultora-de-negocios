import styles from "./PhraseSection.module.css";

export default function PhraseSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.phrase}>
          Te proporcionamos el Saber que necesitás para Elevar tu Negocio al
          <span className={styles.phraseSpan}> Siguiente Nivel</span>
        </h2>
      </div>
    </section>
  );
}
