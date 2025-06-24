import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="main-nav">
      <div className="main-nav__container">
        <h1 className="main-nav__brand">Encuba Frontend</h1>
        <ul className="main-nav__links">
          <li>
            <Link
              to="/blog"
              className={`main-nav__link ${
                location.pathname === "/blog" ? "main-nav__link--active" : ""
              }`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/shopping"
              className={`main-nav__link ${
                location.pathname === "/shopping"
                  ? "main-nav__link--active"
                  : ""
              }`}
            >
              Shopping Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
