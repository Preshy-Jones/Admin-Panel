import React, { useContext, useEffect } from "react";
import { Pagination, Stats, Table } from "../../../components/Users";
import UsersContext from "../../../context/users/users-context";
import { userStatsData } from "../../../utils/content";
import styles from "./index.module.scss";
import axios from "../../../api/client";
import { ENDPOINTS } from "../../../utils/constants";

const Users = () => {
  const { setUsers, setLoading } = useContext(UsersContext);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(ENDPOINTS.GET_USERS);
      const users = response.data;
      setUsers(users);
      setLoading(false);
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <Stats items={userStatsData} />
      <Table />
      <Pagination />
    </div>
  );
};

export default Users;
