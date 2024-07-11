import React from "react";
import "./Footer.css";
import logo from "../../assets/img/AluraflixLogo.png";
import FooterButton from "./Buttons/FooterButtons";
import { IoHomeOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="" />
      <div className="footer__links">
        <FooterButton path="/" text="home" Icon={IoHomeOutline} />
        <FooterButton path="/newVideo" text="nuevo video" Icon={FaPlus} />
      </div>
    </footer>
  );
};

export default Footer;
