import React, { useState } from "react";
import styles from "./Gallery.module.css";
import img1 from "../../../public/Restaurant/sunset-rest-1.webp";
import img2 from "../../../public/Restaurant/sunset-rest-2.webp";
import img3 from "../../../public/Restaurant/sunset-rest-3.webp";
import img4 from "../../../public/Restaurant/sunset-rest-4.webp";
import img5 from "../../../public/Restaurant/sunset-rest-5.webp";
import ImageSlider from "./ImageSlider";

const IMAGES = [
  { url: img1, alt: "Img One" },
  { url: img2, alt: "Img Two" },
  { url: img3, alt: "Img Three" },
  { url: img4, alt: "Img Four" },
  { url: img5, alt: "Img Five" },
];
function Gallery() {
  return (
    <div className={styles.container}>
      <h2>Gallery</h2>
      <ImageSlider images={IMAGES} />
    </div>
  );
}
export default Gallery;
