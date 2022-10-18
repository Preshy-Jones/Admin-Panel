import React, { useContext } from "react";
import UsersContext from "../../../context/users/users-context";
import styles from "./index.module.scss";

const PageSelect = () => {
  const { setUsersPerPage } = useContext(UsersContext);

  return (
    <div className={styles.selectContainer}>
      <select
        onChange={(e) => setUsersPerPage(Number(e.target.value))}
        className={styles.select}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="500">500</option>
      </select>
    </div>
  );
};

export default PageSelect;
