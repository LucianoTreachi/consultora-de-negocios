import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { dataServices } from "../../data/dataServices";
import NavigateToTop from "../../routing/NavigateToTop";
import GoBackButton from "../../components/goBackButton/GoBackButton";
import Footer from "../../components/footer/Footer";
import styles from "./ServiceDetail.module.css";

export default function ServiceDetail() {
  const { url } = useParams();
  const serviceSelected = dataServices.find((service) => service.url === url);

  if (!serviceSelected) return null;

  return (
    <>
      {serviceSelected && (
        <Helmet>
          <title>{serviceSelected.title} | Por Emmanuel Mansilla</title>
        </Helmet>
      )}

      <main>
        <section className={styles.section}>
          <NavigateToTop />
          <div className={styles.container}>
            <GoBackButton />
            <h1 className={styles.title}>{serviceSelected.title}</h1>

            <div className={styles.paragraph}>{serviceSelected.paragraph}</div>
            <div className={styles.containerButton}>
              <a
                className={styles.button}
                href="https://api.whatsapp.com/send?phone=2604018208"
                aria-label="Llamar por Whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                Solicitar asesoramiento
                <svg
                  className={styles.arrow}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </a>
            </div>
            <img
              className={styles.image}
              src={serviceSelected.image}
              alt={serviceSelected.alt}
              width={963}
              height={583}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
