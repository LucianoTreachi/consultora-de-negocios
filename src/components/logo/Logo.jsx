import { Link } from "react-router-dom";
import logo from "/logo.png";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link className={styles.logo} to="/">
      <img
        src={logo}
        alt="Logo de Emmanuel Mansilla"
        width={100}
        height={100}
      />
    </Link>
  );
}
