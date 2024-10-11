import Button from "../Button/Button";
import Testimonials from "../Testimonials/Testimonials";
import styles from "./Cta.module.css";

function Cta() {
  return (
    <div className={styles.cts_btns}>
      <Button className={styles.btn_red} link="/order">
        View Menu
      </Button>
      <Button className={`${styles.btn_red} ${styles.btn_link}`} link="/order">
        Order Online
      </Button>
      <Button className={styles.btn_red} link="/order">
        Call Now
      </Button>
    </div>
  );
}

export default Cta;
