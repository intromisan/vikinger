import React from "react";

const Navigation = () => {
  return (
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
          <button>
            <i className="bi bi-three-dots"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
