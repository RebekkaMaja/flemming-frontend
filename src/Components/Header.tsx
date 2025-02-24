import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu"; // Korrekt import af Menu-komponenten
import "../css/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img
        src={`${process.env.PUBLIC_URL}/hedgehogs.jpg`}
        className="header-image"
        alt="Animals"
      />
      <Link to="/" className="text-overlay">My Pet</Link>
      <Menu /> {/* Menu-komponenten skal bruges her */}
    </header>
  );
};

export default Header;
