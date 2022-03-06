import React, { CSSProperties, ReactNode } from "react";
import styles from "./styles.module.scss";
type CardProps = {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
  width?: number;
  styles?: CSSProperties;
};

const index = ({ children, header, footer, styles: styleProps }: CardProps) => {
  return (
    <section className={styles.card} style={styleProps}>
      {header}
      {children}
      {footer}
    </section>
  );
};

export default index;
