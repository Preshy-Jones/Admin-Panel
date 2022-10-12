import React, { useContext, useState } from "react";
import styles from "./index.module.scss";
import ReactPaginate from "react-paginate";
import UsersContext from "../../../context/users/users-context";

const Navigator = () => {
  const { users, usersPerPage, setPageNumber } = useContext(UsersContext);
  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={changePage}
      pageRangeDisplayed={1}
      pageCount={pageCount}
      previousLabel="<"
      containerClassName={styles.paginationBttns}
      previousLinkClassName={styles.previousBttn}
      nextLinkClassName={styles.nextBttn}
      disabledClassName={styles.paginationDisabled}
      activeClassName={styles.paginationActive}
    />
  );
};

export default Navigator;
