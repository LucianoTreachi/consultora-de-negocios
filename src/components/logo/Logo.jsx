import logo from "../../assets/logo.png";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <a className={styles.logo} href="/">
      <img src={logo} alt="Logo" />
    </a>
  );
}
