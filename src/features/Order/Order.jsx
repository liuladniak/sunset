import styles from "./Order.module.css";
import OrderTabs from "./OrderTabs/OrderTabs";
import Cart from "../Cart/Cart";
import SidebarNav from "./SidebarNav/SidebarNav";
import Search from "../Search/Search";
import Announcement from "../../ui/Header/Announcement";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { BellAlertIcon } from "@heroicons/react/24/outline";
function Order() {
  return (
    <>
      <Announcement />

      <div className={styles.container}>
        <div className={styles.wrap}>
          <SidebarNav />
        </div>
        <div className={styles.middleWrap}>
          <div className={styles.searchWrap}>
            <h2 className={styles.title}>Choose category</h2>
            <Search />
          </div>

          <OrderTabs />
        </div>
        <div className={styles.wrap}>
          <div className={styles.navWrap}>
            {/* <BellAlertIcon className={styles.BellAlertIcon} /> */}
            {/* <EnvelopeIcon className={styles.EnvelopeIcon} /> */}
            <div className={styles.user}>
              <div className={styles.user_name}>
                <h3>Liudmyla</h3>
                <img
                  src="../../../public/uifaces-popular-image.jpg"
                  className={styles.userIcon}
                />
              </div>

              <div className={styles.burger}>
                <span className={styles.burger_line}></span>
                <span className={styles.burger_line}></span>
                <span className={styles.burger_line}></span>
              </div>
            </div>
          </div>
          <Cart />
        </div>
      </div>
    </>
  );
}

export default Order;
