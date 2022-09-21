import React, { FC, CSSProperties } from "react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  color?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
  classNames?: string;
  outline?: boolean;
}

const defaultProps: Partial<ButtonProps> = {
  type: "button",
  // color: "primary",
};

const Button: FC<ButtonProps> = ({
  text,
  type,
  style,
  onClick,
  disabled,
  color,
  outline,
}) => {
  return (
    <button
      className={`btn btn-${color} ${outline && "btn-outline"}`}
      disabled={disabled}
      onClick={onClick}
      style={style}
      type={type}
    >
      {text}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
