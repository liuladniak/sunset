import Deal from "./Deal";
import styles from "./Deals.module.css";

function Deals() {
  return (
    <div className={styles.container}>
      <Deal />
      <Deal />
      <Deal />
      <Deal />
      <Deal />
      <Deal />
      <Deal />
      <Deal />
    </div>
  );
}

export default Deals;
