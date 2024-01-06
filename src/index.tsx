import React, { ReactNode } from "react";
import "./button.scss";

interface ButtonProps {
  primary: boolean;
  backgroundColor: string;
  size: "small" | "medium" | "large";
  label: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {
    primary,
    backgroundColor,
    size = "medium",
    label,
    ...restProps
  } = props;
  const mode = primary ? "xxx-button--primary" : "xxx-button--secondary";
  return (
    <button
      type="button"
      className={["xxx-button", `xxx-button--${size}`, mode].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...restProps}
    >
      {label}
    </button>
  );
};
