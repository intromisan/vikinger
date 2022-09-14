import React, { FC } from "react";

interface UserSocialProps {
  bgColor: string;
  socialIcon: string;
}

const UserSocial: FC<UserSocialProps> = ({ bgColor, socialIcon }) => {
  return (
    <div className="user-social" style={{ backgroundColor: bgColor }}>
      <i className={`bi bi-${socialIcon}`}></i>
    </div>
  );
};

export default UserSocial;
