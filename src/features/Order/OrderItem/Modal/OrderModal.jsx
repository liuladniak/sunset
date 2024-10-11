import styles from "./OrderModal.module.css";

function OrderModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div>
      <div className={styles.overlay} onClick={onClose}></div>
      <div
        className={styles.modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.modal_content}>
          {children}
          <div className={styles.buttons}>
            <div className={styles.items_amount}>
              <button className={styles.btn_amount}>-</button>
              <span>1</span>
              <button className={styles.btn_amount}>+</button>
            </div>
            <button className={styles.btn_close} onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderModal;
