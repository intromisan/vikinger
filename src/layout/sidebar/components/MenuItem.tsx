import React, { FC } from "react";
import { NavLink } from "react-router-dom";

interface MenuItemProps {
  iconName: string;
  title: string;
  href: string;
}

const MenuItem: FC<MenuItemProps> = ({ iconName, title, href }) => {
  return (
    <NavLink to={href}>
      <div className="menu-item_container">
        <i className={`bi bi-${iconName}`}></i>
        <div className="menu-item_tooltip">
          <span>{title}</span>
        </div>
      </div>
    </NavLink>
  );
};

export default MenuItem;
