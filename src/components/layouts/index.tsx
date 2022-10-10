import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import styles from "./index.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.navbar}>
        <NavBar />
      </div>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
