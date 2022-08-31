import ActionItem from "./components/ActionItem";
import ActionMenu from "./components/ActionMenu";
import ExpIndicator from "./components/ExpIndicator";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Searchbar from "./components/Searchbar";

const Topbar = () => {
  return (
    <header className="topbar">
      <Logo />
      <div className="nav-container">
        <ActionItem iconName="grid" />
        <Navigation />
      </div>
      <Searchbar />
      <ExpIndicator />
      <ActionMenu />
    </header>
  );
};

export default Topbar;
