import React from "react";
import { BioSectionType, User } from "../../../types/user";
import styles from "./index.module.scss";

interface Props {
  section: BioSectionType;
  user: User;
}

const BioSection: React.FC<Props> = ({ section, user }) => {
  return (
    <div className={styles.section}>
      <h1>{section.category}</h1>
      <div className={styles.details}>
        {section.content.map((item) => (
          <div>
            <h2>{item.label}</h2>
            <h3>{item.value(user)}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BioSection;
