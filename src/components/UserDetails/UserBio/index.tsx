import React from "react";
import { bioContent } from "../../../utils/content";
import BioSection from "./BioSection";
import styles from "./index.module.scss";

const UserBio = () => {
  return (
    <div className={styles.container}>
      {bioContent.map((section) => (
        <BioSection section={section} />
      ))}
    </div>
  );
};

export default UserBio;
