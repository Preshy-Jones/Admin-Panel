import React from "react";
import { Pagination, Stats, Table } from "../../../components/Dashboard";
import { userStatsData } from "../../../utils/content";
import styles from "./index.module.scss";

const index = () => {
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <Stats items={userStatsData} />
      <Table />
      <Pagination />
    </div>
  );
};

export default index;
