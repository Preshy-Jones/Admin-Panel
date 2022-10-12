import React from "react";
import styles from "./index.module.scss";

const Select = () => {
  return (
    <div className={styles.selectContainer}>
      <select className={styles.select}>
        <option value="0">100</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
    </div>
  );
};

export default Select;
