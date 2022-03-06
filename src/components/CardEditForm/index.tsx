import React from "react";
import styles from "./styles.module.scss";
import { Card } from "../../pages/Main";

type CardEditFormProps = {
  card: Card;
};

const index = ({
  card: { name, work, theme, job, email, description, fileUrl, fileName },
}: CardEditFormProps) => {
  return (
    <li className={styles.card}>
      <form className={styles.form}>
        <div className={styles.row}>
          <input className={styles.input} name="name" value={name} />
          <input className={styles.input} name="work" value={work} />
          <select className={styles.select} name="theme" value={theme}>
            <option value="">--Please choose an option--</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="colorful">Colorful</option>=
          </select>
        </div>
        <div className={styles.row}>
          <input className={styles.input} name="job" value={job} />
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
          />
        </div>
        <div className={styles.row}>
          <textarea
            className={styles.input}
            name="description"
            value={description}
          />
        </div>
        <div className={styles.row}>
          <input className={styles.file} value={fileUrl ?? ""} />
          <button className={styles.submit}>Delete</button>
        </div>
      </form>
    </li>
  );
};

export default index;
