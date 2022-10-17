import React from "react";
import styles from "./index.module.scss";

const Input = ({ ...rest }) => {
  return <input {...rest} className={styles.input} />;
};

export default Input;
