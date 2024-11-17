import { useRef, useState } from "react";
import ModalStartNow from "../../components/modals/modalStartNow/ModalStartNow";
import ModalVideo from "../../components/modals/modalVideo/ModalVideo";
import ArrowRight from "../../icons/ArrowRight";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [modalStartNowVisible, setModalStartNowVisible] = useState(false);
  const [modalVideoVisible, setModalVideoVisible] = useState(false);

  const startNowButtonRef = useRef(null);

  const openModalStartNow = () => {
    setModalStartNowVisible(true);
  };

  const closeModal = () => {
    setModalStartNowVisible(false);
    if (startNowButtonRef.current) {
      startNowButtonRef.current.focus();
    }
  };

  const openModalVideo = () => {
    setModalVideoVisible(true);
  };

  const closeModalVideo = () => {
    setModalVideoVisible(false);
  };

  return (
    <section className={styles.section} aria-label="Inicio">
      <div className={styles.container}>
        <div className={styles.col1}>
          <h1 className={styles.mainTitle}>
            Transformamos Tu Negocio en una Historia de Éxito
          </h1>
          <p className={styles.paragraph}>
            ¿Estás buscando ayuda para tu negocio? ¿Querés alcanzar el éxito? Te
            ofrecemos los servicios que necesitás para lograrlo.
          </p>
          <div className={styles.containerButtons}>
            <button
              ref={startNowButtonRef}
              className={styles.primaryButton}
              onClick={openModalStartNow}
            >
              Empieza ahora
              <ArrowRight className={styles.arrowIcon} />
            </button>
            <button className={styles.secondaryButton} onClick={openModalVideo}>
              Mira nuestro video
            </button>
          </div>
        </div>
        <div className={styles.col2}>
          <picture>
            <source
              media="(max-width: 574px)"
              srcSet="https://res.cloudinary.com/dwqk2mkgh/image/upload/f_auto,q_auto/w_500/v1722464805/consultora-de-negocios/hero_ptmd5i.png"
            />
            <img
              className={styles.image}
              src="https://res.cloudinary.com/dwqk2mkgh/image/upload/f_auto,q_auto/v1722464805/consultora-de-negocios/hero_ptmd5i.png"
              alt="Emmanuel Mansilla mirando al frente, sonriendo, con los brazos cruzados."
              width={1000}
              height={1315}
            />
          </picture>
        </div>
      </div>
      {modalStartNowVisible && <ModalStartNow closeModal={closeModal} />}
      {modalVideoVisible && <ModalVideo closeModalVideo={closeModalVideo} />}
    </section>
  );
}
