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
import { routes } from "../../constant.js";
import { useNotes } from "../../context";
export const Sidebar = () => {
  const [showLabelForm, setLabelForm] = useState(false);
  const { labels } = useNotes();

  return (
    <>
      <aside className="sidebar">
        <Link to={routes.HOME_PAGE}>
          <div className="sidebar--item">
            <NoteAltOutlined className="icon icon--md" />
            <p className="sidebar--title">Notes</p>
          </div>
        </Link>
        {labels.length ? (
          <>
            {labels.map((label) => (
              <Link to={`${routes.LABEL_PAGE}/${label}`} key={label}>
                <div className="sidebar--item">
                  <LabelOutlined className="icon icon--md" />
                  <p className="sidebar--title">{label}</p>
                </div>
              </Link>
            ))}
          </>
        ) : (
          ""
        )}
        <div className="sidebar--item" onClick={() => setLabelForm(true)}>
          <LabelOutlined className="icon icon--md" />
          <p className="sidebar--title">Add Labels</p>
        </div>
        <Link to={routes.ARCHIVE_PAGE}>
          <div className="sidebar--item">
            <ArchiveOutlined className="icon icon--md" />
            <p className="sidebar--title">Archive</p>
          </div>
        </Link>
        <Link to={routes.TRASH_PAGE}>
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
