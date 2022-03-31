import {
  ArchiveOutlined,
  DeleteOutline,
  LabelOutlined,
  NoteAltOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Link to="/app/notes">
        <div className="sidebar--item">
          <NoteAltOutlined className="icon icon--md" />
          <p className="sidebar--title">Notes</p>
        </div>
      </Link>
      <div className="sidebar--item">
        <LabelOutlined className="icon icon--md" />
        <p className="sidebar--title">Labels</p>
      </div>
      <Link to="/app/archive">
        <div className="sidebar--item">
          <ArchiveOutlined className="icon icon--md" />
          <p className="sidebar--title">Archive</p>
        </div>
      </Link>
      <div className="sidebar--item">
        <DeleteOutline className="icon icon--md" />
        <p className="sidebar--title">Trash</p>
      </div>
    </aside>
  );
};
