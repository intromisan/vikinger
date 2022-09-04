import React, { FC } from "react";

interface AvatarProps {
  imageSrc: string;
  progress: number;
}

const Avatar: FC<AvatarProps> = ({ imageSrc, progress }) => {
  return (
    <div className="user-avatar-holder">
      <div className="progress-bar">
        <svg
          className="progress noselect"
          x="0px"
          y="0px"
          viewBox="0 0 776 628"
        >
          <defs>
            <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#615dfa" />
              <stop offset="100%" stop-color="#00c7d9" />
            </linearGradient>
          </defs>
          <path
            className="track"
            d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"
          ></path>
          <path
            className="fill"
            style={{ strokeDashoffset: (1 - progress) * 2160 }}
            d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"
          ></path>
        </svg>
      </div>
      <div className="profile-image-outer">
        <div className="profile-image">
          <img src={imageSrc} alt="User's avatar" />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
