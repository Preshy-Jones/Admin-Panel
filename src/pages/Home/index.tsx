import React from "react";
import { Link } from "react-router-dom";
import { LeftArrowIcon } from "../../components/ui/icons";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navigate}>
        <h4>Login</h4>
        <div>
          <Link to="/login">
            <LeftArrowIcon />
          </Link>
        </div>
      </div>
      <div className={styles.navigate}>
        <h4>Users page</h4>
        <div>
          <Link to="/users">
            <LeftArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
