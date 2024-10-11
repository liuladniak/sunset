import { useState } from "react";
import styles from "./OrderItem.module.css";
import Modal from "./Modal/OrderModal";

function OrderItem({ name, price, description, extraOptions }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapperTop}>
          <h4 className={styles.name}>{name}</h4>
          <span>${price}</span>
        </div>
        <div className={styles.wrapperMd}>
          <p>{description}</p>
          <div className={styles.wrapperBottom}>
            <button onClick={toggleModal} className={styles.buttonDetails}>
              View details
            </button>
            <button className={styles.buttonAdd}>Add to cart</button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Select extrs Options: </p>
        <div className={styles.extraOptions}>
          {extraOptions.map((option) => (
            <div key={option} className={styles.extraOption}>
              {option}
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}

export default OrderItem;
