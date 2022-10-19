import React, { useState } from "react";
import Union from "../../assets/Union.svg";
import Lendsqr from "../../assets/lendsqr.svg";
import Pablo from "../../assets/pablo.svg";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <div className={styles.logo}>
          <img src={Union} alt="union" />
          <img src={Lendsqr} alt="lendsqr" />
        </div>
        <div className={styles.section}>
          <div className={styles.illustration}>
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
                  <input type="email" placeholder="Email" />
                </div>
                <div className={styles.password}>
                  <input
                    type={passwordVisibility ? "text" : "password"}
                    placeholder="Password"
                  />
                  <span
                    className={styles.toggle_password}
                    onClick={() => setPasswordVisibility(!passwordVisibility)}
                  >
                    {passwordVisibility ? "Show" : "Hide"}
                  </span>
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
      </div>
    </div>
  );
};

export default Login;
