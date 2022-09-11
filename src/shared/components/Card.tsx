import React, { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode | ReactNode[];
}

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="card">
      <div className="card_header"></div>
      <div className="card_body">{children}</div>
    </div>
  );
};

export default Card;
