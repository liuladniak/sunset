import Testimonial from "./Testimonial";
import styles from "./Testimonials.module.css";

const cards = [
  {
    title: "Amazing food!",
    description:
      "The food is always bomb and the people are nice. On time too!",
    name: "-Shree (UberEats)",
    stars: 5,
  },
  {
    title: "Really loved it",
    description:
      "The gyro, steak hoagie, and mozzarella sticks were delicious!",
    name: "-Sue (Grubhub)",
    stars: 5,
  },
  {
    title: "Nice place",
    description:
      "My go-to place for ordering pizza! Food quality is fantastic. A date-night favorite.",
    name: "Natalie (Slices)",
    stars: 5,
  },
];

function Testimonials() {
  return <Testimonial cards={cards} />;
}

export default Testimonials;
