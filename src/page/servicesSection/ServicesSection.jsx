import { Link } from "react-router-dom";
import { dataServices } from "../../data/dataServices";
import SubTitleSection from "../../components/subtitleSection/SubTitleSection";
import TitleSection from "../../components/titleSection/TitleSection";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section className={styles.section} id="servicios">
      <div className={styles.container}>
        <SubTitleSection content="Soluciones a tu alcance" />
        <TitleSection content="Nuestros servicios" />
        <div className={styles.row}>
          {dataServices.map((service) => (
            <div className={styles.card} key={service.url}>
              <div>
                <Link to={`/servicio/${service.url}`}>
                  <img
                    className={styles.image}
                    src={service.image}
                    alt={service.alt}
                    width={963}
                    height={583}
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className={styles.content}>
                <h4 className={styles.title}>{service.title}</h4>
                <Link className={styles.link} to={`/servicio/${service.url}`}>
                  Ver más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
