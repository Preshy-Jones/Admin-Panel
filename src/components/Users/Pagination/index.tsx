import React, { useContext } from "react";
import Navigator from "./Navigator";
import styles from "./index.module.scss";
import Select from "./PageSelect";
import UsersContext from "../../../context/users/users-context";

const Pagination = () => {
  const { pageNumber } = useContext(UsersContext);

  return (
    <div className={styles.container}>
      <div className={styles.pageNumber}>
        <h2>Showing</h2>
        <Select />
        <div className={styles.max}>
          <h2>Out of 100</h2>
        </div>
      </div>
      <Navigator />
    </div>
  );
};

export default Pagination;
