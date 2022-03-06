import React from "react";
import { Card } from "../../pages/Main";
import CardAddForm from "../CardAddForm";
import CardEditForm from "../CardEditForm";
import styles from "./styles.module.scss";

type MakerProps = {
  cards: Card[];
  addCard: (cardInfo: Card) => void;
  deleteCard: (cardId: string) => void;
  changeCardInfo: (id: string, key: string, value: string) => void;
};

const index = ({ cards, addCard, deleteCard, changeCardInfo }: MakerProps) => {
  return (
    <section className={styles.maker}>
      <h3 className={styles.title}>Card Maker</h3>
      <ul>
        {cards.map((card) => {
          return (
            <CardEditForm
              card={card}
              key={card.id}
              deleteCard={deleteCard}
              changeCardInfo={changeCardInfo}
            ></CardEditForm>
          );
        })}
        <CardAddForm addCard={addCard}></CardAddForm>
      </ul>
    </section>
  );
};

export default index;
