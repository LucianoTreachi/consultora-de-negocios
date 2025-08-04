import logo from "/logo.png";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <a className={styles.logo} href="/">
      <img
        src={logo}
        alt="Logo de Emmanuel Mansilla"
        width={100}
        height={100}
      />
    </a>
  );
}
