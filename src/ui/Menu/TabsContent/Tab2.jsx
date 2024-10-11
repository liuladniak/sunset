// import styles from "../Menu.module.css";
import styles from "./Tab.module.css";
import menu from "../../../utils/menu";
import MenuItem from "../MenuItem";
function Tab2() {
  const pizzas = menu.pizzas;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {pizzas.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
      <div className={styles.wrapper_imgs}>images</div>
    </div>
  );
}

export default Tab2;
