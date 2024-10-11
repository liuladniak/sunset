import { useState } from "react";
import styles from "./OrderTabs.module.css";
import SpecialsList from "../SpecialsList/SpecialsList";

function OrderTabs() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className={styles.container}>
      <div className={styles.block_tabs}>
        <div
          className={toggleState === 1 ? styles.active_tabs : styles.tabs}
          onClick={() => toggleTab(1)}
        >
          Sunset Specials
        </div>
        <div
          className={toggleState === 2 ? styles.active_tabs : styles.tabs}
          onClick={() => toggleTab(2)}
        >
          Pizzas
        </div>
        <div
          className={toggleState === 3 ? styles.active_tabs : styles.tabs}
          onClick={() => toggleTab(3)}
        >
          Appetizers & Soups
        </div>
        <div
          className={toggleState === 4 ? styles.active_tabs : styles.tabs}
          onClick={() => toggleTab(4)}
        >
          Salads
        </div>
        <div
          className={toggleState === 5 ? styles.active_tabs : styles.tabs}
          onClick={() => toggleTab(5)}
        >
          Chicken Wings
        </div>
        <div
          className={toggleState === 6 ? styles.active_tabs : styles.tabs}
          onClick={() => toggleTab(6)}
        >
          Oven-Fresh Hoagies
        </div>
        <div
          className={toggleState === 7 ? styles.active_tabs : styles.tabs}
          onClick={() => toggleTab(7)}
        >
          Gyros
        </div>
        <div
          className={toggleState === 8 ? styles.active_tabs : styles.tabs}
          onClick={() => toggleTab(8)}
        >
          Beverages & Desserts
        </div>
        <div
          className={toggleState === 9 ? styles.active_tabs : styles.tabs}
          onClick={() => toggleTab(9)}
        >
          Calzones
        </div>
        <div
          className={toggleState === 10 ? styles.active_tabs : styles.tabs}
          onClick={() => toggleTab(10)}
        >
          Wedgies
        </div>
        <div
          className={toggleState === 11 ? styles.active_tabs : styles.tabs}
          onClick={() => toggleTab(11)}
        >
          Pastas
        </div>
      </div>
      <div className={styles.content_tabs}>
        <div
          className={toggleState === 1 ? styles.active_content : styles.content}
        >
          <SpecialsList />
        </div>
        <div
          className={toggleState === 2 ? styles.active_content : styles.content}
        >
          <h3>Content 2</h3>
        </div>
        <div
          className={toggleState === 3 ? styles.active_content : styles.content}
        >
          <h3>Content 3</h3>
        </div>
        <div
          className={toggleState === 4 ? styles.active_content : styles.content}
        >
          <h3>Content 4</h3>
        </div>
        <div
          className={toggleState === 5 ? styles.active_content : styles.content}
        >
          <h3>Content 5</h3>
        </div>
        <div
          className={toggleState === 6 ? styles.active_content : styles.content}
        >
          <h3>Content 6</h3>
        </div>
        <div
          className={toggleState === 7 ? styles.active_content : styles.content}
        >
          <h3>Content 7</h3>
        </div>
        <div
          className={toggleState === 8 ? styles.active_content : styles.content}
        >
          <h3>Content 8</h3>
        </div>
        <div
          className={toggleState === 9 ? styles.active_content : styles.content}
        >
          <h3>Content 9</h3>
        </div>
        <div
          className={
            toggleState === 10 ? styles.active_content : styles.content
          }
        >
          <h3>Content 10</h3>
        </div>
        <div
          className={
            toggleState === 11 ? styles.active_content : styles.content
          }
        >
          <h3>Content 11</h3>
        </div>
      </div>
    </div>
  );
}

export default OrderTabs;
