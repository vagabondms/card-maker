import React, { ReactNode } from "react";
import styles from "./styles.module.scss";
type CardProps = {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
  width?: number;
};

const index = ({ children, header, footer, width }: CardProps) => {
  return (
    <div className={styles.card} style={{ width: width + "px" }}>
      {header}
      {children}
      {footer}
    </div>
  );
};

export default index;
