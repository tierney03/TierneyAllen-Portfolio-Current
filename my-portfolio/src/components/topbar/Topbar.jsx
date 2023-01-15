import React from "react";
import "./topbar.scss";
import { Face3, Mail } from "@mui/icons-material";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Tierney
          </a>
          <div className="itemContainer">
            <Face3 className="icon" />
            <span>1(360)999-6724</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>tierney_03@mac.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
