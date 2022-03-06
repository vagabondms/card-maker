import React from "react";
import { Card } from "../../pages/Main";
import CardEditForm from "../CardEditForm";
import styles from "./styles.module.scss";

type MakerProps = {
  cards: Card[];
};

const index = ({ cards }: MakerProps) => {
  return (
    <section className={styles.maker}>
      <h3 className={styles.title}>Card Maker</h3>
      <ul>
        {cards.map((card) => {
          return <CardEditForm card={card} key={card.id}></CardEditForm>;
        })}
      </ul>
    </section>
  );
};

export default index;
