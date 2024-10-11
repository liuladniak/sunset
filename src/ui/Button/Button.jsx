import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

function Button({ children, className, link }) {
  const buttonElement = link ? (
    <Link to={link} className={`${styles.button} ${className}`}>
      {children}
    </Link>
  ) : (
    <button className={`${styles.button} ${className}`}>{children}</button>
  );
  return buttonElement;
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  link: PropTypes.string,
};
export default Button;
