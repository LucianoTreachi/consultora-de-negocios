import { Link } from "react-router-dom";
import { useEffect, useState, useCallback, useRef } from "react";
import Logo from "../logo/Logo";
import CloseIcon from "../../icons/CloseIcon";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeaderScrolled, setHeaderScrolled] = useState(false);
  const firstLinkRef = useRef(null);

  // Menu
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Navigate to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  // Scroll on the page
  const handleScroll = useCallback(() => {
    if (window.scrollY > 0) {
      setHeaderScrolled(true);
      if (isOpen) {
        closeMenu();
      }
    } else {
      setHeaderScrolled(false);
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Focus on the first link
  useEffect(() => {
    if (isOpen && firstLinkRef.current) {
      const timeout = setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  return (
    <header
      className={`${styles.header} ${
        isHeaderScrolled ? styles.headerScrolled : ""
      }`}
    >
      <nav className={styles.nav}>
        <Logo />

        <div className={`${styles.menu} ${isOpen && styles.open}`}>
          <button
            className={styles.closeMenuButton}
            onClick={toggleMenu}
            aria-label="Cerrar menú"
          >
            <CloseIcon />
          </button>

          <Link
            className={styles.menuLink}
            ref={firstLinkRef}
            onClick={() => scrollToSection("sobre-mi")}
          >
            Sobre mí
          </Link>
          <Link
            className={styles.menuLink}
            onClick={() => scrollToSection("servicios")}
          >
            Servicios
          </Link>
          <Link
            className={styles.menuLink}
            onClick={() => scrollToSection("testimonios")}
          >
            Testimonios
          </Link>
          <Link
            className={styles.menuLink}
            onClick={() => scrollToSection("contacto")}
          >
            Contacto
          </Link>
        </div>

        <button
          className={styles.openMenuButton}
          onClick={toggleMenu}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          MENÚ
        </button>
      </nav>

      <div
        className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      ></div>
    </header>
  );
}
