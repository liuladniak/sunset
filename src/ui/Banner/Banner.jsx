import { useState } from "react";
import styles from "./Banner.module.css";

function Banner() {
  const [index, setIndex] = useState(0);
  const images = [
    "/public/sunset-banner-1.jpg",
    "/public/sunset-banner-2.jpg",
    "/public/sunset-banner-3.jpg",
  ];
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  return (
    <div className={styles.arrowBoundary}>
      <div className={styles.container}>
        <div
          className={styles.arrowContainer}
          style={{ left: 0 }}
          onClick={() => handleArrow("l")}
        >
          <span className={styles.arrow_left}>&#60;</span>
        </div>
        <div
          className={styles.wrapper}
          style={{ transform: `translateX(${-144 * index}rem)` }}
        >
          {images.map((img, i) => (
            <div className={styles.imgContainer} key={i}>
              <img src={img} alt="" className={styles.image} />
            </div>
          ))}
        </div>
        <div
          className={styles.arrowContainer}
          style={{ right: 0 }}
          onClick={() => handleArrow("r")}
        >
          <span className={styles.arrow_right}>&#62;</span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
