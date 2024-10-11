import styles from "./Menu.module.css";
import MenuTabs from "./MenuTabs";
import Tab1 from "./TabsContent/Tab1";
import Tab10 from "./TabsContent/Tab10";
import Tab11 from "./TabsContent/Tab11";
import Tab2 from "./TabsContent/Tab2";
import Tab3 from "./TabsContent/Tab3";
import Tab4 from "./TabsContent/Tab4";
import Tab5 from "./TabsContent/Tab5";
import Tab6 from "./TabsContent/Tab6";
import Tab7 from "./TabsContent/Tab7";
import Tab8 from "./TabsContent/Tab8";
import Tab9 from "./TabsContent/Tab9";
import menu from "../../utils/menu";

const tabData = [
  { label: "Sunset Specials", content: <Tab1 /> },
  { label: "Pizzas", content: <Tab2 /> },
  { label: "Appetizers & Soups", content: <Tab3 /> },
  { label: "Salads", content: <Tab4 /> },
  { label: "Chicken Wings", content: <Tab5 /> },
  { label: "Oven-Fresh Hoagies", content: <Tab6 /> },
  { label: "Gyros", content: <Tab7 /> },
  { label: "Beverages & Desserts", content: <Tab8 /> },
  { label: "Calzones", content: <Tab9 /> },
  { label: "Wedgies", content: <Tab10 /> },
  { label: "Pastas", content: <Tab11 /> },
];

function Menu() {
  return (
    <div className={styles.container} id="menu">
      <h2 className={styles.section_title}>Our Menu</h2>
      <MenuTabs tabs={tabData} />
    </div>
  );
}

export default Menu;
