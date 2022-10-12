import React, { useContext } from "react";
import UsersContext from "../../../context/users/users-context";
import { userTableHeaders } from "../../../utils/content";
import { EclipseDotIcon, SortIcon } from "../../ui/icons";
import styles from "./index.module.scss";
import StatusComponent from "./StatusComponent";

const Table = () => {
  const { users, usersPerPage, pageNumber } = useContext(UsersContext);

  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user, index) => {
      return (
        <tr key={index + 1}>
          <td>{user.orgName}</td>
          <td>{user.userName}</td>
          <td>{user.email}</td>
          <td>{user.phoneNumber}</td>
          <td>May 15, 2020 10:00 AM</td>
          {/* <StatusComponent status={user?.status} /> */}
          <StatusComponent status="active" />
          <td>
            <span>
              <EclipseDotIcon />
            </span>
          </td>
        </tr>
      );
    });

  return (
    <div>
      {users.length > 0 && (
        <table className={styles.container}>
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
      )}
    </div>
  );
};

export default Table;
