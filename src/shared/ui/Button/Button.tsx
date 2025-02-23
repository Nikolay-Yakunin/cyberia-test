import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  round?: boolean;
}

export const Button = ({
  children,
  variant = "secondary",
  round,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`${styles.button} ${styles[variant]} ${round && styles.round} ${className}`}
    >
      {children}
    </button>
  );
};
