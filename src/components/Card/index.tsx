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
    <section className={styles.card} style={{ width: width + "rem" }}>
      {header}
      {children}
      {footer}
    </section>
  );
};

export default index;
