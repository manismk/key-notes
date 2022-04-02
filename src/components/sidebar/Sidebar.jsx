import {
  ArchiveOutlined,
  DeleteOutline,
  LabelOutlined,
  NoteAltOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LabelContainer } from "../";
import "./sidebar.css";

export const Sidebar = () => {
  const [showLabelForm, setLabelForm] = useState(false);

  return (
    <>
      <aside className="sidebar">
        <Link to="/app/notes">
          <div className="sidebar--item">
            <NoteAltOutlined className="icon icon--md" />
            <p className="sidebar--title">Notes</p>
          </div>
        </Link>
        <div className="sidebar--item" onClick={() => setLabelForm(true)}>
          <LabelOutlined className="icon icon--md" />
          <p className="sidebar--title">Add Labels</p>
        </div>
        <Link to="/app/archive">
          <div className="sidebar--item">
            <ArchiveOutlined className="icon icon--md" />
            <p className="sidebar--title">Archive</p>
          </div>
        </Link>
        <Link to="/app/trash">
          <div className="sidebar--item">
            <DeleteOutline className="icon icon--md" />
            <p className="sidebar--title">Trash</p>
          </div>
        </Link>
      </aside>
      {showLabelForm && (
        <LabelContainer closeForm={() => setLabelForm(false)} />
      )}
    </>
  );
};
