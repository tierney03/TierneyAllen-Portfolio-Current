import React from "react";
import "./menu.scss";

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#references">References</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a
            href="https://drive.google.com/file/d/1MPI1pmrpXh0Z4_EgQkJEKCkt7Wsov4zT/view?usp=sharing"
            target="_onblank"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
