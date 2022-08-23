import { ReactComponent as LogoSvg } from "../../shared/assets/img/logo.svg";

const Topbar = () => {
  return (
    <header className="topbar">
      {/* // Logo */}
      <div className="logo_container">
        <div className="logo_image-container">
          {/* <img src={LogoSvg} className="logo_image" /> */}
          <LogoSvg className="logo_image" />
        </div>
        <h1>VIKINGER</h1>
      </div>

      {/* // ActionItem - Sidebar */}
      <div>
        <i className="bi bi-grid"></i>
      </div>

      {/* // Nav Menu */}
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Faqs</a>
          </li>
          <li>
            <button>...</button>
          </li>
        </ul>
      </nav>

      {/* // Searchbar */}
      <div className="searchbar_container">
        <input />
        <div className="searchbar_icon-container">
          <i className="bi bi-search"></i>
        </div>
      </div>

      {/* // Experience Indicator */}
      <div className="experience-indicator_container">
        <div className="experience-indicator_info">
          <span>Next:</span>
          <span>38 EXP</span>
        </div>
        <progress value="62" max="100"></progress>
      </div>

      {/* // Action Menu */}
      <div className="actions-menu_container">
        <div className="actions-menu_group">
          <div className="action-item">
            <i className="bi bi-bag"></i>
          </div>
          <div className="action-item">
            <i className="bi bi-emoji-smile"></i>
          </div>
          <div className="action-item">
            <i className="bi bi-chat-left-text"></i>
          </div>
          <div className="action-item">
            <i className="bi bi-bell"></i>
          </div>
        </div>
        <div className="action-item">
          <i className="bi bi-gear"></i>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
