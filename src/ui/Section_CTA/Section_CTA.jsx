import Cta from "../CTA/Cta";
import Testimonials from "../Testimonials/Testimonials";
import styles from "./Section_CTA.module.css";

function Section_CTA() {
  return (
    <div className={styles.container}>
      <div className={styles.cta}>
        <Cta />
      </div>
      <div className={styles.testimonials}>
        <Testimonials />
      </div>
    </div>
  );
}

export default Section_CTA;
