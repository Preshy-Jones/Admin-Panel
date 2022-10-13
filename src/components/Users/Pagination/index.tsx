import React, { useContext } from "react";
import Navigator from "./Navigator";
import styles from "./index.module.scss";
import Select from "./Select";
import UsersContext from "../../../context/users/users-context";

const Pagination = () => {
  const { pageNumber } = useContext(UsersContext);

  return (
    <div className={styles.container}>
      <div className={styles.pageNumber}>
        <h2>Showing of {pageNumber}</h2>
        <Select />
        <h2>Out of 100</h2>
      </div>
      <Navigator />
    </div>
  );
};

export default Pagination;
