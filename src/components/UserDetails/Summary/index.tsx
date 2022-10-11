import React from "react";
import Avatar from "../../../assets/avatar.svg";
import styles from "./index.module.scss";
import fullStar from "../../../assets/star.svg";
import blankStar from "../../../assets/blankStar.svg";

const Summary = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.name}>
          <img src={Avatar} alt="avatar" />
          <div>
            <h1>Grace Effiom</h1>
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
          <h1>₦200,000.00</h1>
          <h2>9912345678/Providus Bank</h2>
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
