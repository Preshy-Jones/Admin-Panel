import React from "react";
import { dummyUsersData, userTableHeaders } from "../../../utils/content";
import { EclipseDotIcon, SortIcon } from "../../ui/icons";
import styles from "./index.module.scss";
import StatusComponent from "./StatusComponent";

const Table = () => {
  return (
    <div>
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
        <tbody className={styles.recordBody}>
          {dummyUsersData.map((user, index) => (
            <tr>
              <td>{user.orgName}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>May 15, 2020 10:00 AM</td>
              <StatusComponent status={user.status} />
              <td>
                <span>
                  <EclipseDotIcon />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
