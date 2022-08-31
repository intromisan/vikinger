import ActionItem from "./ActionItem";

const ActionMenu = () => {
  return (
    <div className="actions-menu_container">
      <div className="actions-menu_group">
        <ActionItem iconName="bag" />
        <ActionItem iconName="emoji-smile" />
        <ActionItem iconName="chat-left-text" />
        <ActionItem iconName="bell" />
      </div>
      <ActionItem iconName="gear" />
    </div>
  );
};

export default ActionMenu;
