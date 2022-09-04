import React, { FC } from "react";

interface MenuItemProps {
  iconName: string;
  title: string;
}

const MenuItem: FC<MenuItemProps> = ({ iconName, title }) => {
  return (
    <div className="menu-item_container">
      <i className={`bi bi-${iconName}`}></i>
      <div className="menu-item_tooltip">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default MenuItem;
