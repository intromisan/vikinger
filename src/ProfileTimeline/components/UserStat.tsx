import React, { FC, ReactElement } from "react";

interface UserStatProps {
  title: string;
  imgSrc?: string;
  text: string;
}

const UserStat: FC<UserStatProps> = ({ title, text, imgSrc }) => {
  return (
    <div className="user-stat">
      {imgSrc ? (
        <img src={imgSrc} alt={title} />
      ) : (
        <p className="user-stat_text">{text}</p>
      )}
      <p className="user-stat_title">{title}</p>
    </div>
  );
};

export default UserStat;
