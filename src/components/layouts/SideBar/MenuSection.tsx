import React from "react";
import { MenuItemType } from "../../../types/menu";

import MenuItem from "./MenuItem";
import styles from "./index.module.scss";

interface Props {
  label: string;
  items: MenuItemType[];
}

const MenuSection: React.FC<Props> = ({ label, items }) => {
  return (
    <div className={styles.menusection}>
      <h1>{label}</h1>
      {items.map((item: MenuItemType, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </div>
  );
};

export default MenuSection;
