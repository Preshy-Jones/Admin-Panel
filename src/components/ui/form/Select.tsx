import React from "react";
import { SelectItem } from "../../../types/ui";
import styles from "./index.module.scss";

const Select: React.FC<{ items: SelectItem[] }> = ({ items, ...rest }) => {
  return (
    <select className={styles.select} {...rest}>
      <option value="0">Select :</option>
      {items.map((item, index) => (
        <option value={item.value}>Lendsqr</option>
      ))}
    </select>
  );
};

export default Select;
