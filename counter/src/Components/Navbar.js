import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
const Links = [
  { path: "/", title: "Home" },
  { path: "/counter", title: "Counter" },
  { path: "/stopwatch", title: "Stopwatch" },
  { path: "/timer", title: "Timer" },
  { path: "/todo", title: "Todo" },
  { path: "/advancetimer", title: "Timerwithbuttons" },
];

function Navbar() {
  return (
  <div style={{
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    width: "90%",
    margin: "auto",
    height:"40px",
    backgroundColor:"blue"
  }}>
   {Links.map((link) => (
        <NavLink
          className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
          key={link.path}
          to={link.path}
        >
          {link.title}
        </NavLink>
      ))}
  
  </div>
  
  
  
  );
}

export default Navbar;
