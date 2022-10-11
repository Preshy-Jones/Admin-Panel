import React from "react";
import { BioSectionType } from "../../../types/user";
import styles from "./index.module.scss";

const BioSection: React.FC<{ section: BioSectionType }> = ({ section }) => {
  return (
    <div className={styles.section}>
      <h1>{section.category}</h1>
      <div className={styles.details}>
        {section.content.map((item) => (
          <div>
            <h2>{item.label}</h2>
            <h3>Hello</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BioSection;
