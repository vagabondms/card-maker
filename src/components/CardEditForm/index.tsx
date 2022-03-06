import React, { ChangeEvent, ChangeEventHandler, FormEvent } from "react";
import styles from "./styles.module.scss";
import { Card } from "../../pages/Main";

type CardEditFormProps = {
  card: Card;
  deleteCard: (cardId: string) => void;
  changeCardInfo: (card: Card) => void;
};

const index = ({ card, deleteCard, changeCardInfo }: CardEditFormProps) => {
  const { name, work, theme, job, email, description, fileUrl, fileName, id } =
    card;

  const handleDelete = () => {
    deleteCard(id);
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    changeCardInfo({
      ...card,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <li className={styles.card}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <input
            className={styles.input}
            name="name"
            value={name}
            onChange={handleChange}
          />
          <input
            className={styles.input}
            name="work"
            value={work}
            onChange={handleChange}
          />
          <select
            className={styles.select}
            name="theme"
            value={theme}
            onChange={handleChange}
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="colorful">Colorful</option>=
          </select>
        </div>
        <div className={styles.row}>
          <input
            className={styles.input}
            name="job"
            value={job}
            onChange={handleChange}
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.row}>
          <textarea
            className={styles.input}
            name="description"
            value={description}
            onChange={handleChange}
          />
        </div>
        <div className={styles.row}>
          <input
            className={styles.file}
            value={fileUrl ?? ""}
            onChange={handleChange}
          />
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
