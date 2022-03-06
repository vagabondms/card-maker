import React from "react";
import { Card as CardProps } from "../../pages/Main";
import Card from "../Card";

import styles from "./styles.module.scss";

type PreviewProps = {
  cards: CardProps[];
};

const index = ({ cards }: PreviewProps) => {
  return (
    <section className={styles.preview}>
      <h3 className={styles.title}>Card Preview</h3>
      <ul>
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </ul>
    </section>
  );
};

export default index;
