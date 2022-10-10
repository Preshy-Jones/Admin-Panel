import React from "react";
import { MenuItemType } from "../../../types/menu";
import styles from "./index.module.scss";

const MenuItem: React.FC<{ item: MenuItemType }> = ({ item }) => {
  return (
    <div className={styles.menuItem}>
      {item.icon}
      <h2>{item.label}</h2>
    </div>
  );
};

export default MenuItem;
