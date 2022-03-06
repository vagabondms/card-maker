import React, { ChangeEvent, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { Card } from "../../pages/Main";

type CardEditFormProps = {
  addCard: (cardInfo: Card) => void;
};

const Index = ({ addCard }: CardEditFormProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const workRef = useRef<HTMLInputElement>(null);
  const themeRef = useRef<HTMLSelectElement>(null);
  const jobRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newCard = {
      id: `${Date.now()}`,
      name: nameRef?.current?.value ?? "",
      work: workRef?.current?.value ?? "",
      theme: themeRef?.current?.value ?? "",
      job: jobRef?.current?.value ?? "",
      email: emailRef?.current?.value ?? "",
      description: descriptionRef?.current?.value ?? "",
      fileName: fileRef?.current?.value ?? "",
      fileUrl: "",
    };
    addCard(newCard);
    formRef?.current?.reset();
  };

  const handleFormChange = (e: ChangeEvent<HTMLFormElement>) => {};

  return (
    <div className={styles.card}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onChange={handleFormChange}
        ref={formRef}
      >
        <div className={styles.row}>
          <input
            ref={nameRef}
            name="name"
            className={styles.input}
            placeholder="Name"
          />
          <input
            ref={workRef}
            name="work"
            className={styles.input}
            placeholder="Work"
          />
          <select ref={themeRef} name="theme" className={styles.select}>
            <option value="dark" selected>
              Dark
            </option>
            <option value="light">Light</option>
            <option value="colorful">Colorful</option>=
          </select>
        </div>
        <div className={styles.row}>
          <input
            ref={jobRef}
            name="job"
            className={styles.input}
            placeholder="Job"
          />
          <input
            ref={emailRef}
            name="email"
            className={styles.input}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className={styles.row}>
          <textarea
            ref={descriptionRef}
            name="description"
            className={styles.input}
            placeholder="Description"
          />
        </div>
        <div className={styles.row}>
          <input ref={fileRef} name="file" className={styles.file}></input>
          <button className={styles.submit}>Add</button>
        </div>
      </form>
    </div>
  );
};

export default Index;
