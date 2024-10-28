import TitleSection from "../../components/titleSection/TitleSection";
import MailIcon from "../../icons/MailIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import YoutubeIcon from "../../icons/YoutubeIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import TikTokIcon from "../../icons/TikTokIcon";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.section} id="contacto">
      <div className={styles.container}>
        <TitleSection content="Contactanos" />
        <div className={styles.row}>
          <div className={styles.col1}>
            <form className={styles.form}>
              <div className={styles.containerInput}>
                <label className={styles.label} htmlFor="name">
                  Nombre completo
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="name"
                  autoComplete="name"
                  required
                />
              </div>
              <div className={styles.containerInput}>
                <label className={styles.label} htmlFor="email">
                  Correo electrónico
                </label>
                <input
                  className={styles.input}
                  type="email"
                  id="email"
                  autoComplete="email"
                  required
                />
              </div>
              <div className={styles.containerInput}>
                <label className={styles.label} htmlFor="number">
                  Número de teléfono
                </label>
                <input
                  className={styles.input}
                  type="phone"
                  id="number"
                  autoComplete="number"
                  required
                />
              </div>
              <div className={styles.containerInput}>
                <label className={styles.label} htmlFor="textarea">
                  Mensaje
                </label>
                <textarea
                  className={styles.textarea}
                  id="textarea"
                  required
                ></textarea>
              </div>
              <div className={styles.containerButtons}>
                <input
                  className={styles.buttonSubmit}
                  type="submit"
                  value="Enviar consulta"
                />
              </div>
            </form>
          </div>
          <div className={styles.col2}>
            <div className={styles.box}>
              <div className={styles.boxIconSocial}>
                <MailIcon />
              </div>
              <p>emmanuelmansilla493@gmail.com</p>
            </div>
            <div className={styles.box}>
              <div className={styles.boxIconSocial}>
                <FacebookIcon />
              </div>
              <p>Emmanuel Mansilla</p>
            </div>
            <div className={styles.box}>
              <div className={styles.boxIconSocial}>
                <YoutubeIcon />
              </div>
              <p>emmanuelmansilla8209</p>
            </div>
            <div className={styles.box}>
              <div className={styles.boxIconSocial}>
                <InstagramIcon />
              </div>
              <p>emmanuel_mansilla1</p>
            </div>
            <div className={styles.box}>
              <div className={styles.boxIconSocial}>
                <TikTokIcon />
              </div>
              <p>emanuelmansill1</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
