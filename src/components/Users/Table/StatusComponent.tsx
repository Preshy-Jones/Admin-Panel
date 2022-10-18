import React from "react";
import { capitalizeFirstLetter } from "../../../utils/utility";
import styles from "./index.module.scss";

const StatusComponent: React.FC<{ status: any }> = ({ status }) => {
  return (
    <td>
      <span className={styles[status]}> {capitalizeFirstLetter(status)}</span>
    </td>
  );
};

export default StatusComponent;
