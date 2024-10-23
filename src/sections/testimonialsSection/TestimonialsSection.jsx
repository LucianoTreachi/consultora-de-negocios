import { useState } from "react";
import { dataTestimonials } from "../../data/dataTestimonials";
import TitleSection from "../../components/titleSection/TitleSection";
import ChevronRightIcon from "../../icons/ChevronRightIcon";
import ChevronLeftIcon from "../../icons/ChevronLeftIcon";
import QuoteIcon from "../../icons/QuoteIcon";
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
                <img src={testimonial.image} alt="" />
              </div>
              <h3 className={styles.cardTitle1}>{testimonial.title1}</h3>
              <h4 className={styles.cardTitle2}>{testimonial.title2}</h4>
              <p className={styles.cardParagraph}>{testimonial.paragraph}</p>

              <QuoteIcon className={styles.quoteIcon} />

              {/* Slide Controls */}
              <div className={styles.controls}>
                <button
                  onClick={handlePrevTestimonial}
                  aria-label="Retroceder al testimonio anterior"
                >
                  <ChevronRightIcon />
                </button>
                <button
                  onClick={handleNextTestimonial}
                  aria-label="Avanzar al siguiente testimonio"
                >
                  <ChevronLeftIcon />
                </button>

                {/* Dots indicators */}
                <div className={styles.indicatorContainer}>
                  {dataTestimonials.map((_, index) => (
                    <span
                      key={index}
                      className={`${styles.indicator} ${
                        index === currentTestimonial ? styles.active : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
