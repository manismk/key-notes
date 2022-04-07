import { Link, useLocation } from "react-router-dom";
import { Sidebar, NotesForm } from "../";
import "./navbar.css";
import { useEffect, useState } from "react";
import { Person, Menu } from "@mui/icons-material";

export const Navbar = () => {
  const [showSidebar, setSidebar] = useState(false);
  const [showForm, setForm] = useState(false);
  const { pathname } = useLocation();

  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) setSidebar(false);
    });

    return () =>
      window.removeEventListener("resize", () => {
        if (window.innerWidth >= 768) setSidebar(false);
      });
  });
  useEffect(() => {
    setSidebar(false);
  }, [pathname]);

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
          <Link to="/profile">
            <Person className="icon" />
          </Link>
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
