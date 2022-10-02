import React, { FC, CSSProperties } from "react";
import classNames from "classnames";

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
  const buttonClasses = classNames({
    btn: true,
    "btn-outline": outline,
  });

  return (
    <button
      className={`${buttonClasses} btn-${color}`}
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
