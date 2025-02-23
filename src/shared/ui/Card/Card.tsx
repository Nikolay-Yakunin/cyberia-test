import React from "react";
import styles from "./Card.module.css";

export interface CardProps {
  title: string;
  image: string;
  description: string;
}

export const Card = ({ title, image, description }: CardProps) => {
  const cardStyle: React.CSSProperties = { backgroundImage: `url(${image})` };

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.overlay}>
        <Vector />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

const Vector = () => (
  <svg
    className={styles.link}
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="24.9999"
      height="5.46874"
      rx="1"
      transform="matrix(1 0 0 -1 0 24.9995)"
      fill="#2D76F9"
    />
    <rect
      width="14.0625"
      height="5.46874"
      rx="1"
      transform="matrix(1 0 0 -1 10.938 14.0625)"
      fill="#2D76F9"
    />
    <rect
      width="24.9999"
      height="5.46874"
      rx="1"
      transform="matrix(0 1 1 0 0 0.00012207)"
      fill="#2D76F9"
    />
    <rect
      width="14.0625"
      height="5.46874"
      rx="1"
      transform="matrix(0 1 1 0 10.938 0.00012207)"
      fill="#2D76F9"
    />
  </svg>
);
