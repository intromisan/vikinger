const Searchbar = () => {
  return (
    <div className="searchbar_container">
      <input placeholder="Search here for people or groups" />
      <div className="searchbar_icon-container">
        <i className="bi bi-search"></i>
      </div>
    </div>
  );
};

export default Searchbar;
