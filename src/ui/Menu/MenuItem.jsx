import styles from "./MenuItem.module.css";
function MenuItem({ name, price, description }) {
  return (
    <div>
      <div className={styles.menu_item}>
        <h4 className={styles.menu_item_title}>
          {name}....................{price}
        </h4>
        <p className={styles.menu_item_description}>{description}</p>
      </div>
    </div>
  );
}

export default MenuItem;
