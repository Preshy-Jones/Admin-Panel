import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import styles from "./index.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div>
        <NavBar />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
