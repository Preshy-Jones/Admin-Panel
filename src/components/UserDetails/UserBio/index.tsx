import React from "react";
import { User } from "../../../types/user";
import { bioContent } from "../../../utils/content";
import BioSection from "./BioSection";
import styles from "./index.module.scss";

const UserBio: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className={styles.container}>
      {bioContent.map((section) => (
        <BioSection user={user} section={section} />
      ))}
    </div>
  );
};

export default UserBio;
