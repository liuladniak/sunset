import { useState } from "react";
import styles from "./Cart.module.css";
import Button from "../../ui/Button/Button";
function Cart() {
  const [activeButton, setActiveButton] = useState(1);
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Cart</h2>
        <div className={styles.deliveryOptions}>
          <button
            className={`${styles.btn} ${
              activeButton === 1 ? styles.btn_active : ""
            }`}
            onClick={() => handleButtonClick(1)}
          >
            Pickup
          </button>
          <button
            className={`${styles.btn} ${
              activeButton === 2 ? styles.btn_active : ""
            }`}
            onClick={() => handleButtonClick(2)}
          >
            Delivery
          </button>
          <button
            className={`${styles.btn} ${
              activeButton === 3 ? styles.btn_active : ""
            }`}
            onClick={() => handleButtonClick(3)}
          >
            Custom Date
          </button>
        </div>
        <h2>Your Order</h2>
        <p>1. Pizza Margherita</p>
      </div>
      <div>
        <Button color="green">Checkout</Button>
      </div>
    </div>
  );
}

export default Cart;
