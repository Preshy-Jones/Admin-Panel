import React from "react";
import { LeftArrowIcon } from "../../../components/ui/icons";
import { UserBio, UserSummary } from "../../../components/UserDetails";
import styles from "./index.module.scss";

const UserDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navigate}>
        <LeftArrowIcon />
        <h4>Back to Users</h4>
      </div>
      <div className={styles.userPanel}>
        <h1>Users</h1>
        <div className={styles.userAccess}>
          <button className={styles.blacklist}>Blacklist User</button>
          <button className={styles.activate}>Activate User</button>
        </div>
      </div>
      <UserSummary />
      <UserBio />
    </div>
  );
};

export default UserDetails;
