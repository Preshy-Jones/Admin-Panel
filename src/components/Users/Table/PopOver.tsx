import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersContext from "../../../context/users/users-context";
import {
  ActivateUserIcon,
  BlacklistUserIcon,
  EclipseDotIcon,
  EyeIcon,
} from "../../ui/icons";
import styles from "./index.module.scss";

function PopOver({ id }: any) {
  const navigate = useNavigate();
  // const handleToggleAction = (option) => {};

  const { userId, setUserId } = useContext(UsersContext);

  // const handleToggle = (id: string) => {
  //   if (userId !== id) {
  //     setUserId(id);
  //   } else {
  //     setUserId(null);
  //   }
  // };

  return (
    <div>
      <span className={styles.eclipsedotsicon}>
        <EclipseDotIcon
        // onClick={() => handleToggle(id)}
        />
      </span>
      {/* {userId === id && (
        <div className={styles.popover}>
          <div>
            <EyeIcon />
            <h1>View details</h1>
          </div>
          <div>
            <BlacklistUserIcon />
            <h1>Blacklist User</h1>
          </div>
          <div>
            <ActivateUserIcon />
            <h1>Activate User</h1>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default PopOver;
