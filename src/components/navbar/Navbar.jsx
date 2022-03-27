import { Link } from "react-router-dom";
import { Sidebar } from "../";
import "./navbar.css";
import { useState } from "react";
import { Person, Menu } from "@mui/icons-material";
import {} from "@mui/material";

export const Navbar = () => {
  const [showSidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <div className={`${showSidebar ? "open" : ""}`}>
      <header className="nav--container container--100">
        <div className="logo">
          <button
            className="btn icon--btn hamburger m-r-1"
            onClick={toggleSidebar}
          >
            <Menu />
          </button>

          <Link to="/app/notes">
            <span>Key</span> Notes
          </Link>
        </div>
        <div className="cta--container">
          <button className="btn btn--primary ">Create Note</button>
          <Person className="icon" />
        </div>
      </header>
      <Sidebar />
      {showSidebar && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};
