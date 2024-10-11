import styles from "./Search.module.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Search() {
  return (
    <div className={styles.searchBox}>
      <MagnifyingGlassIcon className={styles.search_icon} />
      <input className={styles.search} placeholder="Search items" />
    </div>
  );
}

export default Search;
