import React, { useContext } from "react";
import UsersContext from "../../../context/users/users-context";
import { userTableHeaders } from "../../../utils/content";
import { statusGenerator } from "../../../utils/utility";
import { SortIcon } from "../../ui/icons";
import styles from "./index.module.scss";
import Modal from "./Modal";
import PopOver from "./PopOver";
import StatusComponent from "./StatusComponent";

const Table = () => {
  const { users, usersPerPage, pageNumber, showModal, setShowModal } =
    useContext(UsersContext);

  const pagesVisited = pageNumber * usersPerPage;

  const values = {
    pagesVisited,
    pageNumber,
    usersPerPage,
  };
  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user, index) => {
      return (
        <tr className={styles.tableDataHeader} key={index + 1}>
          <td>{user.orgName}</td>
          <td>{user.userName}</td>
          <td>{user.email}</td>
          <td>{user.phoneNumber}</td>
          <td>{user.lastActiveDate}</td>
          {/* <StatusComponent status={user?.status} /> */}
          <StatusComponent status={statusGenerator(user.accountBalance)} />
          <td>
            <PopOver id={user.id} />
          </td>
        </tr>
      );
    });

  return (
    <div className={styles.container}>
      <pre>{JSON.stringify(values, null, 2)}</pre>
      {users.length > 0 && (
        <div className={styles.tablecontainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                {userTableHeaders.map((header, index) => (
                  <th key={index + 1} scope="col">
                    {!header.hasIcon && header.title}
                    {header.hasIcon && (
                      <div className={styles.header}>
                        <span>{header.title}</span>
                        <SortIcon />
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={styles.recordBody}>{displayUsers}</tbody>
          </table>
          <button
            className={styles.filter}
            onClick={() => setShowModal(!showModal)}
          >
            Filter
          </button>
        </div>
      )}
      {showModal && <Modal />}
    </div>
  );
};

export default Table;
