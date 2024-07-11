import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./FooterButtons.css";
import { IoHomeOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const FooterButtons = ({ path, text, Icon }) => {
  const location = useLocation();

  return (
    <Link to={path}>
      {location.pathname === path ? (
        <button className="footer__button active" disabled>
          <Icon />
          {text}
        </button>
      ) : (
        <button className="footer__button">
          <Icon />
        </button>
      )}
    </Link>
  );
};

export default FooterButtons;
