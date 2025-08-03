import { useEffect, useState } from "react";
import WhatsAppIcon from "../../icons/WhatsAppIcon";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <a
          className={`${isVisible ? styles.appear : ""}`}
          href="https://api.whatsapp.com/send?phone=2604018208"
          aria-label="Whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon className={styles.whatsAppIcon} />
        </a>
      )}
    </>
  );
}
