import styles from "./SubTitleSection.module.css";

export default function SubTitleSection({ content }) {
  return <h2 className={styles.subTitleSection}>{content}</h2>;
}
