import styles from "./SpecialsList.module.css";
import MenuItem from "../OrderItem/OrderItem";
const menuSpecials = [
  {
    id: 1,
    name: "Special 1",
    price: 5.99,
    description: "Lorem ipsum dolor sit amet, consectet",
    extraOptions: ["Cheese", "Bacon", "Onions"],
  },
  {
    id: 2,
    name: "Special 2",
    price: 4.99,
    description:
      "Lorem ipsum dolor sit amet, consectet dolor sit amet, consectet",
    extraOptions: ["Pepperoni", "Mushrooms", "Olives"],
  },
  {
    id: 3,
    name: "Special 3",
    price: 6.99,
    description: "JOPjdj ipsum dolor sit amet,  dolor sit amet, consectet",
    extraOptions: ["Salami", "Pepper"],
  },
  {
    id: 4,
    name: "Special 4",
    price: 5.99,
    description: "Lorem ipsum dolor sit amet, consectet",
    extraOptions: ["Fish", "Spinach", "Onion"],
  },
  {
    id: 5,
    name: "Special 5",
    price: 4.99,
    description:
      "Lorem ipsum dolor sit amet, consectet dolor sit amet, consectet",
    extraOptions: ["Chicken", "Raddish", "Carrot"],
  },
  {
    id: 6,
    name: "Special 6",
    price: 6.99,
    description: "JOPjdj ipsum dolor sit amet,  dolor sit amet, consectet",
    extraOptions: ["Corn", "Wheat", "Parsley"],
  },
];

function SpecialsList() {
  return (
    <div className={styles.container}>
      {menuSpecials.map((item) => (
        <MenuItem
          key={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
          extraOptions={item.extraOptions}
        />
      ))}
    </div>
  );
}

export default SpecialsList;
