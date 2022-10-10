import React from "react";
import {
  businnessMenuItems,
  customerMenuItems,
  settingMenuItems,
} from "../../../utils/content";
import {
  BriefcaseIcon,
  CaretDownIcon,
  DownIcon,
  HouseIcon,
} from "../../ui/icons";

import styles from "./index.module.scss";
import MenuItem from "./MenuItem";
import MenuSection from "./MenuSection";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.switch}>
        <BriefcaseIcon />
        <h1>Switch Organization</h1>
        <DownIcon />
      </div>
      <div className={styles.dashboard}>
        <HouseIcon />
        <h2>Dashboard</h2>
      </div>
      <MenuSection label="CUSTOMERS" items={customerMenuItems} />
      <MenuSection label="BUSINESSES" items={businnessMenuItems} />
      <MenuSection label="SETTINGS" items={settingMenuItems} />
    </div>
  );
};

export default SideBar;
