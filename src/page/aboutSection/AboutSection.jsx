import TitleSection from "../../components/titleSection/TitleSection";
import ArrowRight from "../../icons/ArrowRight";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.section} id="sobre-mi">
      <div className={styles.container}>
        <TitleSection content="Mi camino profesional" />
        <div className={styles.row}>
          <div className={styles.col1}>
            <picture>
              <source
                media="(max-width: 574px)"
                srcSet="https://res.cloudinary.com/dwqk2mkgh/image/upload/f_auto,q_auto/w_500/v1722464197/consultora-de-negocios/about_goysqs.jpg"
              />
              <img
                className={styles.image}
                src="https://res.cloudinary.com/dwqk2mkgh/image/upload/f_auto,q_auto/v1722464197/consultora-de-negocios/about_goysqs.jpg"
                alt="Emmanuel Mansilla en una oficina brindando asesoramiento"
                loading="lazy"
              />
            </picture>
          </div>
          <div className={styles.col2}>
            <p>
              Soy Emmanuel Mansilla, un apasionado del mundo de los negocios y
              estoy aquí para guiarte en el camino hacia el crecimiento de tu
              empresa.
            </p>
            <p>
              Junto a mi equipo, hemos capacitado a más de 200 clientes,
              incluyendo empresarios, profesionales, emprendedores y personas
              decididas a llevar a cabo una transformación profunda en sus
              negocios.
            </p>
            <p>
              Mi única misión es proporcionarte la información necesaria para
              que puedas formar parte de ese exclusivo 5% de emprendedores que
              se atreven a cambiar sus negocios y lograr resultados exitosos.
            </p>
            <p>
              ¿Te gustaría que te ayudara a convertirte en uno de esos
              emprendedores exitosos y revolucionar tu negocio?
            </p>
            <p>¡No dudes en contactarme!</p>
            <a
              className={styles.button}
              href="https://api.whatsapp.com/send?phone=2604018208"
              aria-label="Solicitar asesoramiento a través de Whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              Solicitar asesoramiento
              <ArrowRight className={styles.arrow} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
