import { Link } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";
import styles from "./Navbar.module.css";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Button from "../Button/Button";
function Navbar() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.container}>
        <div className={` ${styles.nav_logo}`}>
          <Link className={styles.logo} to="/">
            SUNSET
          </Link>
          <span>
            Pizza &<br />
            Grill
          </span>
        </div>
        <div className={`${styles.nav} ${styles.nav_left}`}>
          {/* <Link className={styles.nav_active} to="/">
            Home
          </Link> */}

          <ScrollLink
            className={styles.nav_active}
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="menu"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Menu
          </ScrollLink>
          <ScrollLink
            to="deals"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Deals
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </ScrollLink>
        </div>

        <div className={`${styles.nav} ${styles.nav_right}`}>
          {/* <Button className={styles.btn_menu}>View Menu</Button> */}
          <Button className={styles.btn_order} link="/order">
            Order Now
          </Button>
          <div>Liu</div>

          <div className={styles.ShoppingCartIconBox}>
            <ShoppingBagIcon className={styles.ShoppingCartIcon} />
            <span className={styles.cart_number}>2</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
