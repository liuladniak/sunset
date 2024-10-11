import { Link } from "react-router-dom";
import styles from "./SidebarNav.module.css";

function SidebarNav() {
  return (
    <div className={styles.container}>
      <ul className={styles.sidebarnav}>
        <Link to="/" className={styles.logo}>
          SUNSET
        </Link>
        <Link className={`${styles.nav} ${styles.nav_active}`} to="/">
          Home
        </Link>
        <li>Deals</li>
      </ul>
      <div className={styles.policy}>
        <ul>
          <li>
            <div>
              <h3>Maximum Amount for pickup-delivery</h3>
              <p>
                In order to pay by Credit card or Cash Maximum order amount is
                $1000
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>Order Preparation Time</h3>
              <p>Order Preparation Time for Delivery is 45 - 60 minutes.</p>
            </div>
          </li>
          <li>
            <div>
              <h3>Minimum Delivery Amount</h3>
              <p>The minimum order amount for delivery is $20.</p>
            </div>
          </li>
          <li>
            <div>
              <h3>Pickup Area</h3>
              <p>
                We accept Pickup orders within following zipcode : 94501, 94502,
                94601 and 94606
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>Order Preparation Time</h3>
              <p>Order Preparation Time for Pickup is 30 minutes.</p>
            </div>
          </li>
          <li>
            <div>
              <h3>Payment by Credit Card</h3>
              <p>
                The order amount must be at least $10, in order to pay by
                Paypal/Credit Card
              </p>
            </div>   
          </li>
          <li>
            <div>
              <h3>Delivery charge</h3>
              <p>
                1 - 2 Miles : $2.99 3 Miles : $4.99 4 Miles : $5.99 5 Miles :
                $6.99
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SidebarNav;
