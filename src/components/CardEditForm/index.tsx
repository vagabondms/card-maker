import React, { ChangeEvent, ChangeEventHandler, FormEvent } from "react";
import styles from "./styles.module.scss";
import { Card } from "../../pages/Main";

type CardEditFormProps = {
  card: Card;
  deleteCard: (cardId: string) => void;
  changeCardInfo: (id: string, key: string, value: string) => void;
};

const index = ({
  card: { name, work, theme, job, email, description, fileUrl, fileName, id },
  deleteCard,
  changeCardInfo,
}: CardEditFormProps) => {
  const handleDelete = () => {
    deleteCard(id);
  };
  const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    changeCardInfo(id, name, value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <li className={styles.card}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <div className={styles.row}>
          <input className={styles.input} name="name" value={name} />
          <input className={styles.input} name="work" value={work} />
          <select className={styles.select} name="theme" value={theme}>
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
          <button
            className={styles.submit}
            type="button"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </form>
    </li>
  );
};

export default index;
