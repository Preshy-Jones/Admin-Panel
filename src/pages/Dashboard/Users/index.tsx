import React, { useContext, useEffect, useState } from "react";
import { Pagination, Stats, Table } from "../../../components/Dashboard";
import UsersContext from "../../../context/users/users-context";
import UsersProvider from "../../../context/users/users-provider";
import { userStatsData } from "../../../utils/content";
import styles from "./index.module.scss";

const Users = () => {
  return (
    <UsersProvider>
      <div className={styles.container}>
        <h1>Users</h1>
        <Stats items={userStatsData} />
        <Table />
        <Pagination />
      </div>
    </UsersProvider>
  );
};

export default Users;
