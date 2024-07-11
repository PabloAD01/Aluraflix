import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Button.css";

const Button = ({ path, text, onClick }) => {
  const location = useLocation();

  return path ? (
    <Link to={path}>
      {location.pathname === path ? (
        <button className="button active" disabled>
          {text}
        </button>
      ) : (
        <button className="button">{text}</button>
      )}
    </Link>
  ) : (
    <button className={`button ${text}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
