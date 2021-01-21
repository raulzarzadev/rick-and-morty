import React from "react";
import "../styles/header.css";
import logo from "../assets/title-rick-and-morty.png";
import logoYellow from "../assets/rickandmorty.png";

function Header() {
  return (
    <header className="header">
      <a href="/">
        <img
          className="header-logo"
          srcset={`
          ${logo} 320w,
          ${logoYellow} 600w,
          ${logoYellow} 960w`}
          sizes="(max-width: 320px) 280px,
            (max-width: 600px) 440px,
            960px"
          src={logoYellow}
          alt="logo"
        />
      </a>

      <nav className="header-navbar">
        <ul className="navbar">
          <li className="navbar-item">
            <a href="/">inicio</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
