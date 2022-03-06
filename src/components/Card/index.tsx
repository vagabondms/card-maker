import React from "react";
import { Card } from "../../pages/Main";
import styles from "./styles.module.scss";

type CardProps = {
  card: Card;
};

const getStyles = (theme: string) => {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      return styles.dark;
  }
};

const index = ({
  card: { theme, fileUrl, fileName, name, work, job, email, description },
}: CardProps) => {
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img
        src={fileUrl ?? "images/default_logo.png"}
        alt="portrait"
        className={styles.img}
      ></img>
      <div className={styles.description}>
        <h2>{name}</h2>
        <p className={styles.work}>{work}</p>

        <p>{job}</p>
        <p>{email}</p>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default index;
