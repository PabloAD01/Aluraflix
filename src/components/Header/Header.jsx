import { useState } from "react";
import logo from "../../assets/img/AluraflixLogo.png";
import "./Header.css";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Aluraflix logo" />
      <div className="links">
        <Button path="/" text="home" />
        <Button path="/newVideo" text="nuevo video" />
      </div>
    </div>
  );
};

export default Header;
