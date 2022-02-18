import React, { useState, useEffect } from "react";
import "./NavMenu.css";
import { navMenu } from "../../data";

const NavMenu = () => {
  return (
    <nav className="navMenu navMenu--nodisplay">
      <ul className="navMenu__items">
        {navMenu.map((x, index) => (
          <li key={index}>
            <div
              className={`navMenu__item ${
                x.tier === 1
                  ? "navMenu__item--1"
                  : x.tier === 2
                  ? "navMenu__item--2"
                  : "navMenu__item--3"
              }`}
            >
              <a href="#">{x.item}</a>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
