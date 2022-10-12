import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EclipseDotIcon } from "../../ui/icons";
import styles from "./index.module.scss";

function PopOver({ id }: any) {
  const navigate = useNavigate();
  // const handleToggleAction = (option) => {};

  const [userId, setUserId] = useState();

  // const handleToggle = (id) => {
  //   if (toggledOfferingSub !== id) {
  //     dispatch(setToggledOfferingSub(id));
  //   } else {
  //     dispatch(setToggledOfferingSub(null));
  //   }
  // };
  return (
    <div>
      <span className={styles.EclipseDotsIcon}>
        <EclipseDotIcon />
      </span>
      {/* {userId === id && (
        <div className="absolute top-8 right-8 z-10 w-[188px] rounded-md text-[14px] font-light text-vendor">
          <div className="grid">
            <h1 className=" hover:bg-primary hover:bg-opacity-10 pl-6 py-2.5">
              Modify
            </h1>
            <h1 className=" hover:bg-primary hover:bg-opacity-10 pl-6 py-2.5">
              View details
            </h1>
            <h1 className=" hover:bg-primary hover:bg-opacity-10 pl-6 py-2.5">
              Manage interests
            </h1>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default PopOver;
