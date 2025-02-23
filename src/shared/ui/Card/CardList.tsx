import React from "react";
import { Card, CardProps } from "./Card";
import styles from "./Card.module.css";

interface CardListProps {
  items: CardProps[];
}

const CardList: React.FC<CardListProps> = ({ items }) => {
  return (
    <div className={styles.cardList}>
      {items.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CardList;
