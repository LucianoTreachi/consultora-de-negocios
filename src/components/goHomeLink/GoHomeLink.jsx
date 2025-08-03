import { Link } from "react-router-dom";
import ArrowLeft from "../../icons/ArrowLeft";
import styles from "./GoHomeLink.module.css";

export default function GoHomeLink() {
  return (
    <Link to="/" className={styles.button}>
      <ArrowLeft />
      Volver a inicio
    </Link>
  );
}
