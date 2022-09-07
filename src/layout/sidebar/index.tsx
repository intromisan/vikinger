import Avatar from "./components/Avatar";

import AvatarSrc from "../../shared/assets/img/avatar.jpg";
import MenuItem from "./components/MenuItem";

const Sidebar = () => {
  return (
    <div className="sidebar_minimized">
      <Avatar imageSrc={AvatarSrc} progress={0.7} />
      <div className="sidebar_menu">
        <MenuItem iconName="tv" title="Newsfeed" href="newsfeed" />
        <MenuItem iconName="bar-chart" title="Overview" href="overview" />
        <MenuItem iconName="people" title="Groups" href="groups" />
        <MenuItem iconName="person" title="Members" href="members" />
        <MenuItem iconName="trophy" title="Badges" href="badges" />
        <MenuItem iconName="star" title="Quests" href="quests" />
        <MenuItem iconName="play-btn" title="Streams" href="streams" />
        <MenuItem iconName="calendar" title="Events" href="events" />
        <MenuItem iconName="chat-square-dots" title="Forums" href="forums" />
        <MenuItem iconName="basket" title="Marketplace" href="marketplace" />
      </div>
    </div>
  );
};

export default Sidebar;
