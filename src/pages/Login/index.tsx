import React from "react";
import Union from "../../assets/Union.svg";
import Lendsqr from "../../assets/lendsqr.svg";
import Pablo from "../../assets/pablo.svg";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className="illustration">
        <div className={styles.logo}>
          <img src={Union} alt="union" />
          <img src={Lendsqr} alt="lendsqr" />
        </div>
        <div>
          <img src={Pablo} alt="" />
        </div>
      </div>
      <div className={styles.form_container}>
        <h1>Welcome!</h1>
        <h2>Enter details to login.</h2>
        <div>
          <form className={styles.form}>
            <div>
              <input type="text" placeholder="Email" />
            </div>
            <div>
              <input type="text" placeholder="Password" />
            </div>

            <h3>Forgot PASSWORD?</h3>
            <button
              className={styles.button}
              onClick={() => navigate("/users")}
            >
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
