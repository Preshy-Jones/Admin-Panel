import React, { useContext } from "react";
import UsersContext from "../../../context/users/users-context";
import { MenuItemType } from "../../../types/menu";
import styles from "./index.module.scss";

const Stats: React.FC<{ items: MenuItemType[] }> = ({ items }) => {
  // const { users } = useContext(UsersContext);
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index + 1} className={styles.stat}>
          {item.icon}
          <h3>{item.label}</h3>
          <h1>1450</h1>
        </div>
      ))}

    </div>
  );
};

export default Stats;
