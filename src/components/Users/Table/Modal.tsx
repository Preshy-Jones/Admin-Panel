import React from "react";
import { Input, Select } from "../../ui/form";
import styles from "./index.module.scss";

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.form}>
        <div>
          <label htmlFor="">Organization</label>
          <div className={styles.select}>
            <Select items={[{ label: "Lendsqr", value: "lendsqr" }]} />
          </div>
        </div>
        <div>
          <label htmlFor="">Username</label>
          <div className={styles.input}>
            <Input placeholder="User" />
          </div>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <div className={styles.input}>
            <Input placeholder="Email" />
          </div>
        </div>
        <div>
          <label htmlFor="">Date</label>
          <div className={styles.input}>
            <Input placeholder="Date" type="date" />
          </div>
        </div>
        <div>
          <label htmlFor="">Phone Number</label>
          <div className={styles.input}>
            <Input placeholder="Phone Number" />
          </div>
        </div>
        <div>
          <label htmlFor="">Status</label>
          <div className={styles.select}>
            <Select items={[{ label: "Lendsqr", value: "lendsqr" }]} />
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.reset}>Reset</button>
        <button className={styles.filter}>Filters</button>
      </div>
    </div>
  );
};

export default Modal;
