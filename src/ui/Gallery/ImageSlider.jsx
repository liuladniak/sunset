import { useState } from "react";
import styles from "./ImageSlider.module.css";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

function ImageSlider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);
  const slidesToShow = 3;
  const totalSlides = images.length;

  function showPrevImage() {
    setImageIndex((index) => (index === 0 ? totalSlides - 1 : index - 1));
  }

  function showNextImage() {
    setImageIndex((index) => (index === totalSlides - 1 ? 0 : index + 1));
  }
  // function showPrevImage() {
  //   setImageIndex((index) => {
  //     if (index === 0) return images.length - 1;
  //     return index - 1;
  //   });
  // }
  // function showNextImage() {
  //   setImageIndex((index) => {
  //     if (index === images.length - 1) return 0;
  //     return index + 1;
  //   });
  // }
  const isLastSlide = imageIndex + slidesToShow >= totalSlides;
  const isFirstSlide = imageIndex === 0;
  return (
    <section aria-label="Image Slider" className={styles.container}>
      <div className={styles.imgs_container}>
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className={styles.img_slider_img}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>

      <button
        onClick={showPrevImage}
        className={`${styles.img_slider_btn} ${styles.img_slider_btn_left}`}
        style={{
          left: 0,
          backgroundColor: isFirstSlide ? "#2a2a2a" : "black",
          pointerEvents: isFirstSlide ? "none" : "auto",
        }}
        aria-label="View Previous Image"
        disabled={isFirstSlide}
      >
        <ChevronLeftIcon aria-hidden className={styles.arrow_left} />
      </button>

      <button
        onClick={showNextImage}
        className={`${styles.img_slider_btn} ${styles.img_slider_btn_right}`}
        style={{
          right: 0,
          backgroundColor: isLastSlide ? "#2a2a2a" : "black",
          pointerEvents: isLastSlide ? "none" : "auto",
        }}
        aria-label="View Next Image"
        disabled={isLastSlide}
      >
        <ChevronRightIcon aria-hidden className={styles.arrow_right} />
      </button>
    </section>
  );
}

export default ImageSlider;
