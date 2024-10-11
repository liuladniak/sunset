import styles from "./Deal.module.css";
function Deal() {
  return (
    <div className={styles.deal_card}>
      <h3 className={styles.deal_title}>Pickup Pizza Special</h3>
      <div>
        <span className={styles.deal_price}>$9.99</span>
        <span>LG.16&quot; Cheese 12-cut Pizza</span>
      </div>
      <div>
        <span className={styles.deal_price}>$10.99</span>
        <span>XL.18&quot; Cheese 16-cut Pizza</span>
      </div>
      <div className={styles.disclamer}>
        With this coupon. Not valid with other offers. Limited time offer.
      </div>
    </div>
  );
}

export default Deal;
