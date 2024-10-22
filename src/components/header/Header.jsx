import { Link } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import Logo from "../logo/Logo";
import styles from "./Header.module.css";
import CloseIcon from "../../icons/CloseIcon";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeaderScrolled, setHeaderScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

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

  return (
    <header
      className={`${styles.header} ${
        isHeaderScrolled ? styles.headerScrolled : ""
      }`}
    >
      <nav className={styles.nav}>
        {/* Logo */}
        <Logo />

        {/* Menu */}
        <div className={`${styles.menu} ${isOpen && styles.open}`}>
          {/* Close Menu Button */}
          <button
            className={styles.closeMenuButton}
            onClick={toggleMenu}
            aria-label="Cerrar menú de navegación"
            tabIndex={isOpen ? "0" : "-1"}
          >
            <CloseIcon />
          </button>

          {/* Links */}
          <Link
            className={styles.menuLink}
            onClick={() => scrollToSection("sobre-mi")}
            tabIndex={isOpen ? "0" : "-1"}
          >
            Sobre mí
          </Link>
          <Link
            className={styles.menuLink}
            onClick={() => scrollToSection("servicios")}
            tabIndex={isOpen ? "0" : "-1"}
          >
            Servicios
          </Link>
          <Link
            className={styles.menuLink}
            onClick={() => scrollToSection("testimonios")}
            tabIndex={isOpen ? "0" : "-1"}
          >
            Testimonios
          </Link>
          <Link
            className={styles.menuLink}
            onClick={() => scrollToSection("contacto")}
            tabIndex={isOpen ? "0" : "-1"}
          >
            Contacto
          </Link>
        </div>

        {/* Open Menu Button */}
        <button
          className={styles.openMenuButton}
          onClick={toggleMenu}
          aria-label="Menú de navegación"
          aria-expanded={isOpen}
        >
          MENU
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      ></div>
    </header>
  );
}
