import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div>
          <h2>Working Hours:</h2>
          <p>Monday - Thursday: 10am - 11am</p>
          <p>Friday - Saturday: 10am - 12am</p>
          <p>Sunday: 11am - 11pm</p>
        </div>
        <div>
          <h2>Our Address:</h2>
          <p>38 E.MAIN CARNEGIE, PA 15106</p>
          <h2>Call Us:</h2>
          <p>(412) 276 - 3103</p>
          <p>(412) 218 - 6123</p>
        </div>
        <div>
          <p>sit fugiat repudiandae</p>
          <p>Tenetur sint</p>
          <p>culpa accusantium</p>
        </div>
      </div>
      <h2>Sunset Pizza & Grill © 2022</h2>
    </div>
  );
}

export default Footer;
