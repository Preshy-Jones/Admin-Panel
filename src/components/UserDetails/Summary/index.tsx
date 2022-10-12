import React from "react";
import Avatar from "../../../assets/avatar.svg";
import styles from "./index.module.scss";
import fullStar from "../../../assets/star.svg";
import blankStar from "../../../assets/blankStar.svg";
import { User } from "../../../types/user";

const Summary: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.name}>
          <img
            className={styles.avatar}
            src={user.profile.avatar ? user.profile.avatar : Avatar}
            alt="avatar"
          />
          <div>
            <h1>{user.profile.firstName + " " + user.profile.lastName}</h1>
            <h2>LSQFf587g90</h2>
          </div>
        </div>
        <div className={styles.tier}>
          <h2>User’s Tier</h2>
          <div className={styles.rating}>
            <img src={fullStar} alt="fullStar" />
            <img src={blankStar} alt="blankStar" />
            <img src={blankStar} alt="blankStar" />
          </div>
        </div>
        <div className={styles.wallet}>
          <h1>₦{user.accountBalance}</h1>
          <h2>{user.accountNumber}</h2>
        </div>
      </div>
      <div className={styles.navigation}>
        <h3 className={styles.active}>General Details</h3>
        <h3>Documents</h3>
        <h3>Bank Details</h3>
        <h3>Loans</h3>
        <h3>Savings</h3>
        <h3>App and System</h3>
      </div>
    </div>
  );
};

export default Summary;
