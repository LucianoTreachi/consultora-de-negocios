import CloseIcon from "../../../icons/CloseIcon";
import FocusTrap from "../../focusTrap/FocusTrap";
import ArrowRight from "../../../icons/ArrowRight";
import styles from "./ModalStartNow.module.css";

export default function ModalStartNow({ closeModal }) {
  return (
    <div className={styles.modalBackdrop} onClick={closeModal}>
      <FocusTrap closeModal={closeModal}>
        <div className={styles.modalBox}>
          <button
            className={styles.closeModalButton}
            onClick={closeModal}
            aria-label="Cerrar modal"
          >
            <CloseIcon />
          </button>

          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>¡Comienza el cambio ahora!</h2>
            <p className={styles.modalParagrapgh}>
              ¿Estás buscando ayuda para tu negocio? ¿Querés alcanzar el éxito?
              Te ofrecemos los servicios que necesitás para lograrlo.
            </p>
            <a
              className={styles.button}
              href="https://api.whatsapp.com/send?phone=2604018208"
              aria-label="Solicitar asesoramiento a través de WhatsApp"
              target="_blank"
              rel="noreferrer"
            >
              Solicitar asesoramiento
              <ArrowRight />
            </a>
          </div>
        </div>
      </FocusTrap>
    </div>
  );
}
