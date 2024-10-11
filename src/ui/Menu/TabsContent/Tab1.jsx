import styles from "../Menu.module.css";
import menu from "../../../utils/menu";
function Tab1() {
  const specials = menu.specials;
  return (
    <div className={styles.container}>
      <div className={styles.menu_list}>
        <div className={styles.menu_block}>
          <h2 className={styles.heading}>Sunset Specials</h2>
          <div className={styles.menu_item}>
            <h4 className={styles.menu_item_title}>
              Beef Shish Kebab....................12.99
            </h4>
            <p className={styles.menu_item_description}>
              Skewered grilled beef served with grilled vegetables (tomatoes &
              green peppers), our own special rice pilaf, seasoned onion salad &
              grilled pita bread
            </p>
          </div>
          <div className={styles.menu_item}>
            <h4 className={styles.menu_item_title}>
              CHICKEN SHISH KEBAB....................12.99
            </h4>
            <p className={styles.menu_item_description}>
              Skewered grilled chicken served with grilled vegetables (tomatoes
              & green peppers), our own special rice pilaf, seasoned onion salad
              & grilled pita bread
            </p>
          </div>
        </div>
        <div className={styles.menu_block}>
          <div className={styles.menu_item}>
            <h4 className={styles.menu_item_title}>
              SUCUK PIDE....................12.99
            </h4>
            <p className={styles.menu_item_description}>
              Skewered grilled beef served with grilled vegetables (tomatoes &
              green peppers), our own special rice pilaf, seasoned onion salad &
              grilled pita bread
            </p>
          </div>
          <div className={styles.menu_item}>
            <h4 className={styles.menu_item_title}>
              SPINACH PIDE....................12.99
            </h4>
            <p className={styles.menu_item_description}>
              Skewered grilled chicken served with grilled vegetables (tomatoes
              & green peppers), our own special rice pilaf, seasoned onion salad
              & grilled pita bread
            </p>
          </div>
        </div>
        <div className={`${styles.menu_img} ${styles.menu_block}`}>
          <div>
            <img
              src="/public/Menu_imgs/sunset-specials-2.png"
              className={styles.img}
            />
          </div>
          <div>
            <img
              src="/public/Menu_imgs/sunset-specials-3.png"
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tab1;
