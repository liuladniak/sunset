import { useState } from "react";
import styles from "./Testimonial.module.css";

function Testimonial({ cards }) {
  const [currentCard, setCurrentCard] = useState(0);
  const showPrevCard = () => {
    setCurrentCard((prevCard) =>
      prevCard > 0 ? prevCard - 1 : cards.length - 1
    );
  };
  const showNextCard = () => {
    setCurrentCard((prevCard) =>
      prevCard < cards.length - 1 ? prevCard + 1 : 0
    );
  };
  const { title, description, name, stars } = cards[currentCard];
  return (
    // <div>
    //   <div className={styles.container}>
    //     <button className={styles.slider_btnleft}>&larr;</button>
    //     <button className={styles.slider_btnright}>&rarr;</button>
    //     <h3 className={styles.header}>Amazing food!</h3>
    //     <p className={styles.description}>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //     </p>
    //     <div className={styles.ratings}>
    //       <div className={styles.rating_stars}>
    //         <img src="../../../public/icons8-star-48.png" alt="icon star" />
    //         <img src="../../../public/icons8-star-48.png" alt="icon star" />
    //         <img src="../../../public/icons8-star-48.png" alt="icon star" />
    //         <img src="../../../public/icons8-star-48.png" alt="icon star" />
    //         <img src="../../../public/icons8-star-48.png" alt="icon star" />
    //       </div>
    //       <div>Uber</div>
    //     </div>
    //   </div>
    // </div>

    <div className={styles.container}>
      <button className={styles.slider_btnleft} onClick={showPrevCard}>
        &larr;
      </button>
      <button className={styles.slider_btnright} onClick={showNextCard}>
        &rarr;
      </button>
      <h3 className={styles.header}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.ratings}>
        <div className={styles.rating_stars}>
          {/* Assuming `stars` is a number indicating the rating */}
          {Array.from({ length: stars }).map((_, index) => (
            <img
              key={index}
              src="../../../public/icons8-star-48.png"
              alt="icon star"
            />
          ))}
        </div>
        <div>{name}</div>
      </div>
    </div>
  );
}

export default Testimonial;
