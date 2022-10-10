import React from "react";
import SearchIcon from "../icons/SearchIcon";
import styles from "./index.module.scss";

const SearchBox = () => {
  return (
    <div>
      <form className={styles.form}>
        <input type="text" placeholder="Search for anything" />
        <button className={styles.button}>
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
