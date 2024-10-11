import styles from "./Announcement.module.css";

function Announcement() {
  return (
    <div className={styles.container}>
      <p className={styles.wrapper}>
        <span>order@sunset-pizza-grille.com</span>
        <span>(412) 276 3103</span>
        <span>(412) 218-6123</span>
      </p>
      <p>Free delivery from $100 order</p>
    </div>
  );
}

export default Announcement;
