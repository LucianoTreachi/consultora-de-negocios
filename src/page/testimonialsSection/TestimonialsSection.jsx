import { useState } from "react";
import { dataTestimonials } from "../../data/dataTestimonials";
import SubTitleSection from "../../components/subtitleSection/SubTitleSection";
import TitleSection from "../../components/titleSection/TitleSection";
import testimonialQuoteImage from "../../assets/testimonial-quote.png";
import styles from "./TestimonialsSection.module.css";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % dataTestimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? dataTestimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className={styles.section} id="testimonios">
      <div className={styles.container}>
        <SubTitleSection content="Testimonios" />
        <TitleSection content="Historias de satisfacción" />
        <div className={styles.row}>
          {dataTestimonials.map((testimonial, index) => (
            <div
              className={`${styles.card} ${
                index === currentTestimonial ? styles.active : ""
              }`}
              key={testimonial.id}
            >
              <div className={styles.boxImage}>
                <img src={testimonial.image} alt="" loading="lazy" />
              </div>
              <h4 className={styles.cardTitle1}>{testimonial.title1}</h4>
              <h5 className={styles.cardTitle2}>{testimonial.title2}</h5>
              <p className={styles.cardParagraph}>{testimonial.paragraph}</p>
              {/* Quote */}
              <img
                className={styles.testimonialQuoteImage}
                src={testimonialQuoteImage}
                alt=""
              />
              {/* Slide Controls */}
              <div className={styles.controls}>
                <button
                  onClick={handlePrevTestimonial}
                  aria-label="Testimonio anterior"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
                  </svg>
                </button>
                <button
                  onClick={handleNextTestimonial}
                  aria-label="Testimonio siguiente"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
