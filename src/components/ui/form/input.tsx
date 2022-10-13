import React from "react";
import styles from "./index.module.scss";

const input = ({ ...rest }) => {
  return <input {...rest} className={styles.input} type="text" />;
};

export default input;
