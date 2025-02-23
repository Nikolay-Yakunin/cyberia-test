import React, { ImgHTMLAttributes } from "react";
import styles from "./Logo.module.css";
import Logo from "@/assets/logo.svg";
import { Link } from "react-router";

interface LogotypeProps extends ImgHTMLAttributes<HTMLImageElement> {
  size: "small" | "big";
}

export const Logotype = ({ size = "small", ...rest }: LogotypeProps) => {
  return (
    <Link to='/'>
      <img
      src={Logo}
      alt="Cyberia"
      className={`${styles.logo} ${styles[size]}`}
      {...rest}
    />
     </Link>
  );
};
