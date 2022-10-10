import React from "react";
import Stats from "../../../components/Dashboard/Stats";
import Table from "../../../components/Dashboard/Table";
import { userStatsData } from "../../../utils/content";
import styles from "./index.module.scss";

const index = () => {
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <Stats items={userStatsData} />
      <Table />
    </div>
  );
};

export default index;
