import React from "react";
import Avatar from "./components/Avatar";

import AvatarSrc from "../../shared/assets/img/avatar.jpg";
import MenuItem from "./components/MenuItem";

const Sidebar = () => {
  return (
    <div className="sidebar_minimized">
      <Avatar imageSrc={AvatarSrc} progress={0.7} />
      <div className="sidebar_menu">
        <MenuItem iconName="tv" title="Newsfeed" />
        <MenuItem iconName="bar-chart" title="Overview" />
        <MenuItem iconName="people" title="Groups" />
        <MenuItem iconName="person" title="Members" />
        <MenuItem iconName="trophy" title="Badges" />
        <MenuItem iconName="star" title="Quests" />
        <MenuItem iconName="play-btn" title="Streams" />
        <MenuItem iconName="calendar" title="Events" />
        <MenuItem iconName="chat-square-dots" title="Forums" />
        <MenuItem iconName="basket" title="Marketplace" />
      </div>
    </div>
  );
};

export default Sidebar;
