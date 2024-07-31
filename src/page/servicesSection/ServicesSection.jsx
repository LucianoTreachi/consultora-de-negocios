import { Link } from "react-router-dom";
import { dataServices } from "../../data/dataServices";
import TitleSection from "../../components/titleSection/TitleSection";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section className={styles.section} id="servicios">
      <div className={styles.container}>
        <TitleSection content="Nuestros servicios" />
        <div className={styles.row}>
          {dataServices.map((service) => (
            <div className={styles.card} key={service.url}>
              <div>
                <Link to={`/servicio/${service.url}`}>
                  <picture>
                    <source
                      media="(max-width: 574px)"
                      srcSet={service.image500}
                    />
                    <img
                      className={styles.image}
                      src={service.image}
                      alt={service.alt}
                      width={963}
                      height={583}
                      loading="lazy"
                    />
                  </picture>
                </Link>
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{service.title}</h3>
                <Link className={styles.link} to={`/servicio/${service.url}`}>
                  Leer más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
