import {
  ArchiveOutlined,
  DeleteOutline,
  EditOutlined,
  LabelOutlined,
  NoteAltOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LabelContainer } from "../";
import "./sidebar.css";
import { routes } from "../../constant.js";
import { useNotes } from "../../context";

const activeLink = ({ isActive }) => ({
  backgroundColor: isActive ? "#d14600" : "var(--white)",
  color: isActive ? "white" : "var(--black)",
});

export const Sidebar = () => {
  const [showLabelForm, setLabelForm] = useState(false);
  const { labels } = useNotes();

  return (
    <>
      <aside className="sidebar">
        <NavLink style={activeLink} to={routes.HOME_PAGE}>
          <div className="sidebar--item">
            <NoteAltOutlined className="icon icon--md" />
            <p className="sidebar--title">Notes</p>
          </div>
        </NavLink>
        {labels.length ? (
          <>
            {labels.map((label) => (
              <NavLink
                style={activeLink}
                to={`${routes.LABEL_PAGE}/${label}`}
                key={label}
              >
                <div className="sidebar--item">
                  <LabelOutlined className="icon icon--md" />
                  <p className="sidebar--title">{label}</p>
                </div>
              </NavLink>
            ))}
          </>
        ) : (
          ""
        )}
        <div className="sidebar--item" onClick={() => setLabelForm(true)}>
          <EditOutlined className="icon icon--md" />
          <p className="sidebar--title">Add Labels</p>
        </div>
        <NavLink style={activeLink} to={routes.ARCHIVE_PAGE}>
          <div className="sidebar--item">
            <ArchiveOutlined className="icon icon--md" />
            <p className="sidebar--title">Archive</p>
          </div>
        </NavLink>
        <NavLink style={activeLink} to={routes.TRASH_PAGE}>
          <div className="sidebar--item">
            <DeleteOutline className="icon icon--md" />
            <p className="sidebar--title">Trash</p>
          </div>
        </NavLink>
      </aside>
      {showLabelForm && (
        <LabelContainer closeForm={() => setLabelForm(false)} />
      )}
    </>
  );
};
