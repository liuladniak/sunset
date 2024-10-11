import { useState } from "react";
import styles from "./MenuTabs.module.css";

function MenuTabs({ tabs }) {
  const [activeTab, setActiveTabs] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabs(index);
  };

  return (
    <div className={styles.tabs_container}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tab} ${
              index === activeTab ? styles.active : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className={styles.tab_content}>{tabs[activeTab].content}</div>
    </div>
  );
}

export default MenuTabs;
