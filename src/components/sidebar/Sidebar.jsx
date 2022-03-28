import {
  ArchiveOutlined,
  DeleteOutline,
  LabelOutlined,
  NoteAltOutlined,
} from "@mui/icons-material";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar--item">
        <NoteAltOutlined className="icon icon--md" />
        <p className="sidebar--title">Notes</p>
      </div>
      <div className="sidebar--item">
        <LabelOutlined className="icon icon--md" />
        <p className="sidebar--title">Labels</p>
      </div>
      <div className="sidebar--item">
        <ArchiveOutlined className="icon icon--md" />
        <p className="sidebar--title">Archive</p>
      </div>
      <div className="sidebar--item">
        <DeleteOutline className="icon icon--md" />
        <p className="sidebar--title">Trash</p>
      </div>
    </aside>
  );
};
