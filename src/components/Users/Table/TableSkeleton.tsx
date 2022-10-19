import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./index.module.scss";

const TableSkeleton = () => {
  const rows = Array(10).fill(null);
  return (
    <SkeletonTheme baseColor="rgba(184, 193, 213, 0.19)" highlightColor="white">
      <div className={styles.skeleton_container}>
        <Skeleton height={60} />
        {rows.map((row, index) => (
          <div className={styles.record_skeleton}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
};

export default TableSkeleton;
