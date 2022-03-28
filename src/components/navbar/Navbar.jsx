import { Link } from "react-router-dom";
import { Sidebar, NotesForm } from "../";
import "./navbar.css";
import { useState } from "react";
import { Person, Menu } from "@mui/icons-material";

export const Navbar = () => {
  const [showSidebar, setSidebar] = useState(false);
  const [showForm, setForm] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <>
      <header className="nav--container">
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
          <button className="btn btn--primary " onClick={() => setForm(true)}>
            Create Note
          </button>
          <Person className="icon" />
        </div>
      </header>
      <div className={`${showSidebar ? "open" : ""}`}>
        <Sidebar />
        {showSidebar && <div className="overlay" onClick={toggleSidebar}></div>}
      </div>
      {showForm && (
        <NotesForm
          closeForm={() => {
            setForm(false);
          }}
        />
      )}
    </>
  );
};
