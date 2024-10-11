import styles from "./Lunch_Specials.module.css";

function Lunch_Specials() {
  return (
    <div className={styles.lunch} id="deals">
      <div className={styles.lunch_img_box}>
        <img src="/public/lunch-special.png" />
      </div>
      <div>
        <h3>11AM - 3PM</h3>
        <p>1/2 Regular hoagie, french fries, can of pop..........9.49</p>
        <p>2 topping personal pizza, small salad, can of pop..........9.49</p>
        <p>
          Rice stuffed grape leaves, homemade humus with pita, can of
          pop..........9.49
        </p>
        <p>Homemade cigarette borek, small salad, can pop..........9.49</p>
        <p>Gyro, french fries, can of pop..........9.49</p>
        <p>6 wings, french fries, can of pop..........9.49</p>
      </div>
    </div>
  );
}

export default Lunch_Specials;
