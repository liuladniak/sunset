import styles from "./Favourites.module.css";

function Favourites() {
  return (
    <div className={styles.container}>
      <div className={styles.fav_img_box}>
        <img
          src="../../../public/chicken_alfredo.jpeg"
          alt="chicken alfredo"
          className={styles.fav_img}
        />
      </div>
      <div className={styles.fav_description}>
        <h3 className={styles.section_heading}>Top Favourite</h3>
        <h2 className={styles.dish_title}>Chicken Alfredo Pizza</h2>
        <p className={styles.dish_description}>
          chicken, bacon, mozzarella, provolone, cheddar & parmesan cheese with
          a rich, tasty alfredo sauce
        </p>
        <p className={styles.price}>FROM 7.49</p>
      </div>
    </div>
  );
}

export default Favourites;
