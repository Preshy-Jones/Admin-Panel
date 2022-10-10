import React from "react";
import { MenuItemType } from "../../../types/menu";
import styles from "./index.module.scss";

const Stats: React.FC<{ items: MenuItemType[] }> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div className={styles.stat}>
          {item.icon}
          <h3>{item.label}</h3>
          <h1>1450</h1>
        </div>
      ))}
    </div>
  );
};

export default Stats;
