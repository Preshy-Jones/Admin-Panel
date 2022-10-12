import React, { useEffect, useState } from "react";
import { LeftArrowIcon } from "../../../components/ui/icons";
import { UserBio, UserSummary } from "../../../components/UserDetails";
import styles from "./index.module.scss";
import { Link, useParams } from "react-router-dom";
import { User } from "../../../types/user";
import axios from "../../../api/client";
import { ENDPOINTS } from "../../../utils/constants";
import { getStorage, setStorage } from "../../../utils/localStorage";

const UserDetails = () => {
  const params = useParams();
  const { id } = params;
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${ENDPOINTS.BASE_ENDPOINT}/users/${id}`
      );
      const user = response.data;
      setUser(user);
      setStorage("userDetails", user);
    };
    try {
      const localStorageUser = getStorage("userDetails");
      // console.log(id);
      // console.log(localStorageUser.id);

      if (localStorageUser && localStorageUser.id === id) {
        console.log(localStorageUser);

        setUser(localStorageUser);
      } else {
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.navigate}>
        <LeftArrowIcon />
        <h4>
          <Link to="/users">Back to Users</Link>
        </h4>
      </div>
      <div className={styles.userPanel}>
        <h1>Users</h1>
        <div className={styles.userAccess}>
          <button className={styles.blacklist}>Blacklist User</button>
          <button className={styles.activate}>Activate User</button>
        </div>
      </div>
      {user && (
        <div>
          <UserSummary user={user} />
          <UserBio user={user} />
        </div>
      )}
    </div>
  );
};

export default UserDetails;
